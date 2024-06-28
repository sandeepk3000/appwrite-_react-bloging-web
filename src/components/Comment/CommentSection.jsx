import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Comment, TextArtea } from "../index"
import Serive from '../../appwrite/config'
import { useSelector } from 'react-redux'
import { ID, Query } from 'appwrite'

function CommentSection({ article }) {

    const { register, handleSubmit } = useForm()
    const [error, setError] = useState()
    const [loader, setLoader] = useState(false)
    const [comments, setCommets] = useState([])
    const userData = useSelector(state => state.user.userData)
    const submit = async (data) => {
        console.log(data);
        setError("")
        setLoader(true)
        console.log("artikdfjdskajfkasdj", article);
        try {
            const commentRes = await Serive.createComment({ author: userData.$id, text: data.comment, articleId: article.$id })
            console.log(commentRes);
            if (commentRes) {
                setCommets(prev => [...prev, commentRes])
                setLoader(false)
                // if (dbComments) {

                // }

            }
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    }
    useEffect(() => {
        Serive.getComments(Query.equal("articleId", article.$id))
            .then((data) => {
                console.log("effe", data);
            })
    })
    const handleReply = (parentCommentId, author) => {
        console.log("handlReply", parentCommentId, author);

        const filteredArray = comments.map((comment) => {
            if (comment.author === parentCommentId) {
                comment.replies.push({ text: "reply", author: author, replies: [], parentComment: parentCommentId })
            }

            return comment
        })
        setCommets(filteredArray)
    }
    const createComment = (comments, countReply = 0) => {
        return comments.map((comment, index) => (
            <>
                <Comment comment={comment} handleReply={handleReply} className={""} key={Math.random} marginLeft={`${48 * countReply}px`} />
                {comment.hasOwnProperty("replies") && createComment(comment.replies, countReply + 1)}

            </>
        ))

    }
    return (
        <section className="not-format bg-slate-700 p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Disussion {comments.length}</h2>
            </div>
            <form className="mb-6" onSubmit={handleSubmit(submit)}>
                <h2>{error}</h2>
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <TextArtea
                        label="Your comment"
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..."
                        rows="6"
                        {...register("comment", {
                            required: true,
                        })}
                    />
                </div>
                <Button
                    type="submit"
                    className="relative inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Post comment
                    {loader ? (<div className="absolute w-full h-full top-0 left-0 bg-slate-300 opacity-40">

                    </div>) : ""}
                </Button>
            </form>
            {comments && createComment(comments)}
        </section>
    )
}

export default CommentSection