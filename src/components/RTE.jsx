import React,{useState,useEffect, useId} from 'react'
import { Controller} from 'react-hook-form'
import {Editor} from "@tinymce/tinymce-react"

function RTE({control,label,defaultValue="",name}) {
    const id = useId()
 return <>
 {label && (<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={id}>{label}</label>)}

 <Controller
 name={name || "content"}
 control={control}
 render={({field:{onChange}})=>(
    <Editor 
    apiKey='cxvxv0ulwjc5c4ckav9xxf4ynbjfasa4ko9arxwwsed2bzt7'
    initialValue={defaultValue}
    init={{
        initialValue:defaultValue,
        height: 500,
        menubar: true,
        plugins: [
            "image",
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
            "anchor",
        ],
        toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
    }}
    onEditorChange={(content,editor)=>{
        onChange(content)
    }}
    />
 )}
 />
 </>
}

export default RTE