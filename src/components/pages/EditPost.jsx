import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import serive from '../../appwrite/config'
import { Container,ArticleForm} from "../index"
function EditPost() {
    const navigate = useNavigate()
    const [article, setArticle] = useState()
    const { slug } = useParams()
    useEffect(() => {
        serive.getArticle({ slug })
            .then((data) => {
                if (data) {
                    setArticle(data)
                } else {
                    navigate("/")
                }
            })
    }, [navigate, slug])
    return (
        <Container>
            <ArticleForm article={article} />
        </Container>
    )
}

export default EditPost