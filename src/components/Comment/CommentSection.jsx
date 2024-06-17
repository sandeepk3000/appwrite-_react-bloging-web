import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {Button,Comment,TextArtea} from "../index"
import Serive from '../../appwrite/config'
import { useSelector } from 'react-redux'

function CommentSection({article}) {

    const { register, handleSubmit } = useForm()
    const [error, setError] = useState()
    const [comments, setCommets] = useState(article?.comments || [])
    const userData = useSelector(state => state.user.userData)
    const submit = async (data) => {
        setError("")
        try {
            const commentRes = await Serive.createComment({author:userData.$id,...data})
            if (commentRes) {
                // const created
                // setCommets()
            }
        } catch (error) {
            setError(error.message)
        }
    }
    const createComment = (comments, countReply = 0) => {
        return comments.map((comment, index) => (
            <>
                <Comment comment={comment} className={""} key={Math.random} marginLeft={`${48 * countReply}px`} />
                {comment.hasOwnProperty("replies") && createComment(comment.replies, countReply + 1)}

            </>
        ))

    }
    return (
        <section class="not-format bg-slate-700 p-4">
            <div class="flex justify-between items-center">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Disussion {comments.length}</h2>
            </div>
            <form class="mb-6" onSubmit={handleSubmit(submit)}>
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <TextArtea
                        label="Your comment"
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..."
                        rows="6"
                        {...register("comment", {
                            required: true
                        })}
                    />
                </div>
                <Button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                    Post comment
                </Button>
            </form>
            {comments && createComment(comments)}
        </section>
    )
}

export default CommentSection