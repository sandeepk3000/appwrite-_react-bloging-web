import React, { useState, useEffect } from 'react'
import { CommentSection } from "../index"
import { useParams } from "react-router-dom"
import Serive from '../../appwrite/config'
import { useNavigate, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import parse from "html-react-parser"
function Article() {

    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const { slug } = useParams()
    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)
    useEffect(() => {
        Serive.getArticle({ slug })
            .then((data) => {
                if (data) {
                    setArticle(data)
                    setLoading(false)
                }

            })
    }, [slug, navigate])

    return !loading ? (
        < main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased" >
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    {/* <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                <img className="mr-4 w-16 h-16 rounded-full" src={Serive.getFilePreview(article?.coverImage)} alt="Jese Leos" />
                                <div>
                                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                                    <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                                    <p className="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                </div>
                            </div>
                        </address>
                        <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{article?.title}</h1>
                    </header> */}
                    <div className="relative">
                        <img src={Serive.getFilePreview(article?.coverImage)} className='mb-4 rounded-2xl' alt="" />

                       {userData?.$id === article?.userId && <Link to={`/editArticle/${article?.$id}`}>
                            <svg className="feather feather-edit absolute left-5 opacity-35 text-white hover:opacity-100 cursor-pointer top-3" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        </Link>}

                    </div>
                    <div className="mb-4">
                        {article.content && parse(article?.content)}
                    </div>
                    {/* <CommentSection article={article}  /> */}
                </article>
            </div>
        </main >
    ) : <p className='text-center m-auto text-white bg-red-500 p-3 grid place-items-center text-xl'>Loading......</p>

}

export default Article