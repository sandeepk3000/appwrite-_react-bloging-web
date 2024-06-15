import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { Button, Input, RTE, Select } from "./index"
function ArticleForm({ article }) {
  const { register, handleSubmit, setValue, watch, getValues, control } = useForm({
    defaultValues:
    {
      title: article?.title || "",
      content: article?.content || "",
      tags: article?.tags || [],
      category: article?.category || "",
      status: article?.status || "active"
    }

  })
  const [image, setImage] = useState(article ? appwriteService.getFilePreview(article.coverImage) : null)
  const [tags, setTags] = useState([])
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      // if (name === "image") {
      //   console.log(value, name);
      //   const file = value.image[0]
      //   console.log("file", file);
      //   if (file) {
      //     const reader = new FileReader()
      //     reader.onload = (e) => {
      //       console.log(e.target.result);
      //       setImage(e.target.result)
      //     }
      //     reader.readAsDataURL(file);
      //   }
      // }
    })
    return () => subscription.unsubscribe();
  }, [watch, setValue])
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !tags.includes(getValues("tags").trim()) && getValues("tags").trim().length >= 4) {
      setTags((prev) => [...prev, getValues("tags").trim()])
      event.target.value = ""
    }
  }
  const handleTag = (value) => {
    setTags(tags.filter((tag) => tag !== value))
  }
  const submit = (data) => {
    console.log(data);
  }
  {/* <div className="mb-6">
  <label for="exampletags" class="inline-block mb-2">Tags</label>
  <input type="text" name="tags" value="Tags1, Tags2" class="tagify w-full leading-5 relative text-sm py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="exampletags" minlength="2">
</div> */}

  return (
    <form className="w-full  flex flex-wrap" onSubmit={handleSubmit(submit)}>
      <div className="w-1/2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input
              label="Title"
              placeholder="Sandeep"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
              type="text"
              {...register("title", {
                required: true,
              })}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">

            <Input
              label="slug"
              placeholder="hNJF#F1794%r"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
              type="text"
              {...register("slug", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Input
              label="Tags"
              placeholder="tags"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
              type="text"
              onKeyPress={handleKeyPress}
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
        <div className="flex flex-wrap -mx-3 mb-6" >
          <div className="w-full px-3">
            <Input
              label="Thumbnail"
              placeholder="thumbnail"
              className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              {...register("image", {
                required: true
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
              label="CATEGORY"
              options={["qweqw", "sdfdswfdsafasd"]}
              {...register("category", {
                required: true
              })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              label="STATUS"
              options={["qweqw", "sdfdswfdsafasd"]}
              {...register("status", {
                required: true
              })}
            />

          </div>

        </div>
      </div>

      <div className="w-1/2">
        <div className="w-full px-3">
          {/* <RTE
            label="Editor"
            defaultValue={getValues("content")}
            name={null}
            control={control}
          /> */}
          <Button type="submit"  className="w-full bg-orange-600">
            p
            
          </Button>
        </div>
      </div>

    </form>
  )
}

export default ArticleForm