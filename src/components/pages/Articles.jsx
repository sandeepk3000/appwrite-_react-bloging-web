import React, { useState, useEffect } from 'react'
import { Card, Container } from '../index'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Serive from '../../appwrite/config'
import { Query } from 'appwrite'
function Articles() {
  const { category } = useParams()
  const [articles, setArticles] = useState([])
  const userStatus = useSelector(state => state.user.status)
  useEffect(() => {
    Serive.getArticles({queries: category !== "all" ? [Query.and([Query.equal("status", "active"), Query.equal("category",category)])]:[Query.equal("status", "active")],limit:Query.limit(2),offset:Query.offset(0)})
      .then((data) => {
        if (data.documents) {
          setArticles(data.documents)
        }
      }).catch((error) => {
        console.log(error);
      })
  }, [category])
  return (
    <Container>
      <main className="mt-12">
        {articles.length > 0 && (
          articles.map((article)=>(
            <Card className={"flex border-solid border-b-2 mb-3 pb-3 border-b-gray-400"} category={article.category} title={article.title} content={article.content} coverImage={article.coverImage}$id={article.$id} isEdit={userStatus}/>
          ))
        )}
      </main >

    </Container>
  )
}

export default Articles