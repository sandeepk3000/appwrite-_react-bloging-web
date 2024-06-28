import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { Button, Input, RTE, Select } from "./index"
import authService from '../appwrite/auth'
import Service from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function ArticleForm({ article }) {
  console.log("arti", article);
  const { register, handleSubmit, setValue, watch, getValues, control } = useForm({
    defaultValues:
    {
      title: article?.title || "",
      content: article?.content || "",
      tags: "",
      category: article?.category || "",
      status: article?.status || "",
      slug: article?.$id || ""
    }

  })
  const [image, setImage] = useState(article ? Service.getFilePreview(article.coverImage) : null)
  const [tags, setTags] = useState(article?.tags || [])
  const [loader, setLoader] = useState(false)
  console.log(tags);
  const navigate = useNavigate()
  const userData = useSelector((state) => state.user.userData)
  console.log(userData);
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "image") {
        console.log(value, name);
        const file = value.image[0]
        console.log("file", file);
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            console.log(e.target.result);
            setImage(e.target.result)
          }
          reader.readAsDataURL(file);
        }
      }
    })
    return () => subscription.unsubscribe();
  }, [watch, setValue])
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && !tags.includes(getValues("tags").trim()) && getValues("tags").trim().length >= 4) {
      setTags((prev) => [...prev, getValues("tags").trim()])
      event.target.value = ""
    }
  }
  const handleInputBlur = (event) => {
    if (!tags.includes(getValues("tags").trim()) && getValues("tags").trim().length >= 4) {
      setTags((prev) => [...prev, getValues("tags").trim()])
      event.target.value = ""
    }
  }
  const handleTag = (value) => {
    setTags(tags.filter((tag) => tag !== value))
  }
  const submit = async (data) => {
    setLoader(true)
    console.log(data.image[0]);
    if (article) {
      console.log("artipar");
      const file = data.image[0] ? await Service.uploadFile(data.image[0]) : null;
      if (file) {
        console.log("file exist...",file);
        console.log(article.coverImage);
        const resFile =  await Service.deleteFilePost(article.coverImage)
        console.log("file exist...",resFile);
      }
      setValue("tags", tags)
      const updatedArticle = await Service.updateArticle(article?.$id, { ...getValues() , coverImage: file ? file?.$id : undefined})
      if (updatedArticle) {
        console.log("updatedArticle",updatedArticle);
        setLoader(false)
        navigate(`/article/${updatedArticle?.$id}`)
      }
    } else {
      console.log("upload...", data.image[0]);
      const file = await Service.uploadFile(data.image[0])
      if (file) {
        setValue("tags", tags)
        console.log("firstupload",file);
        console.log(userData);
        const createdArticle = await Service.createArticle({ ...getValues(), coverImage: file?.$id, userId: userData?.$id })
        if (createdArticle) {
          setLoader(false)
          navigate(`/article/${createdArticle?.$id}`)
        }

      }
    }
  }
  {/* <div className="mb-6">
  <label for="exampletags" class="inline-block mb-2">Tags</label>
  <input type="text" name="tags" value="Tags1, Tags2" class="tagify w-full leading-5 relative text-sm py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="exampletags" minlength="2">
</div> */}

  return (
    <form className="w-full  flex flex-wrap relative p-4 md:p-0"  onSubmit={handleSubmit(submit)}>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input
              label="TITLE*"
              placeholder="title"
              maxLength="80"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
              type="text"
              {...register("title", {
                required: true,
              })}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          <div className="mt-0 float-right">{watch("title").length}/80</div>
          </div>
          <div className="w-full md:w-1/2 px-3">

            <Input
              label="UNIQUE ID*"
              placeholder="unique id"
              maxLength="12"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
              type="text"
              {...register("slug", {
                required: true,
                
              })}
            />
            <div className="mt-0 float-right">{watch("slug").length}/12</div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Input
              label="TAGS"
              placeholder="tags"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
              type="text"
              onKeyPress={handleInputKeyDown}
              onBlur={handleInputBlur}
              {...register("tags")}
            />
            {tags.length > 0 && tags.map((tag) => (<span id="badge-dismiss-default" key={tag} className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300 m-2">
              {tag}
              <Button type="button" onClick={() => handleTag(tag)} className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Remove badge</span>
              </Button>
            </span>))}
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6" >
          <div className="w-full px-3">
            <Input
              label="THUMBNAIL*"
              placeholder="thumbnail"
              className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60 mb-4"
              type="file"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              {...register("image", {
                required: !article
              })}
            />
            {image && (
              <div className="w-full mb-4">
                <img
                  src={image}
                  alt={article?.title}
                  className="rounded-lg h-[200px]"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              label="CATEGORY*"
              options={["CATEGORY","tech", "sport","health","food","education","job"]}
              {...register("category", {
                required: true
              })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              label="STATUS*"
              options={["STATUS","active", "inactive"]}
              {...register("status", {
                required: true
              })}
            />

          </div>
          <Button type="submit" className="w-full text-white bg-orange-500 mt-4 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Compose</Button>
        </div>
      </div>

      <div className=" w-full lg:w-1/2 ">
        <div className="w-full px-3">
          <RTE
            label="CONTENT*"
            defaultValue={getValues("content")}
            name={null}
            control={control}
          />

        </div>
      </div>
      {loader ? <div className="absolute w-full h-full top-0 left-0 bg-slate-300 opacity-40">

      </div> : ""}
    </form>
  )
}

export default ArticleForm