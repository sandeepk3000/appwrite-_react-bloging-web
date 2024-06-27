import React from "react";
import parse from 'html-react-parser'
import serive from "../appwrite/config";
import { Link } from "react-router-dom";
function Card({ category, title, content = "", coverImage, className = "", type, isEdit = false, $id }) {
  console.log(category, title, content, coverImage, className);

  return (
    <div className={`${className} relative`}>
      {isEdit && (
        <Link to={`/editArticle/${$id}`}>
          <svg className="feather feather-edit absolute z-10 left-10 opacity-35 text-white hover:opacity-100 cursor-pointer top-10" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
        </Link>
      )}
      <img src={serive.getFilePreview(coverImage)} className={type !== "main" ? "block  lg:block rounded-md h-64 md:h-32 m-4 md:m-0" : "rounded-md md:max-h-96 w-full h-64"} />
      <div className="bg-white rounded px-4">
        <span className={type !== "main" ? "text-green-700 text-sm hidden md:block" : "text-green-700 text-sm hidden md:block mt-4"}> {category}</span>
        <div className={type !== "main" ? "md:mt-0 text-gray-800 font-semibold text-xl mb-2" : 'text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight'}>
          {title}
        </div>
        <p className={type !== "main" ? "block  p-2 pl-0 pt-1 text-sm text-gray-600" : ' text-gray-600 mb-4'}>
          {  content  && content.length  > 164 ? (
            parse(content.slice(0, 200)+" .........")
          ) : parse(content)}
        </p>
      </div>
      <Link to={`/article/${$id}`} >
        <div className="absolute w-full h-full top-0 left-0">

        </div>
      </Link>
    </div>
  )

}

export default Card;
