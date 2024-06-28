import React, { useState, useCallback, useEffect, useId } from 'react'
import { Button, Card } from "../index"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Serive from '../../appwrite/config'
import { Container } from "../index"
function Home() {
  const [articles, setArticles] = useState([])
  const [offset, setOffset] = useState(0)
  const userData = useSelector(state => state.user.userData)
  const navigate = useNavigate()
  const id = useId()
  useEffect(() => {
    
    Serive.getArticles({ limit: 10, offset })
      .then((data) => {
        console.log(data);
        if (data.documents) {
          console.log("iner", data.documents);
          // setOffset(prev => prev + limit)
          setArticles(data.documents)
          console.log(articles[0]);
        }
      }).catch((error) => {
        console.log("setdgdsf", error);
      })
  }, [])




  const loopArticles = (articles = [], className,start,end) => {
    return articles?.slice(start,end).map((article) => (
      <Card isEdit={userData?.$id === article.userId} key={article.$id} className={className} {...article} />
    ))
  }

  const loopSubMainArticles = (articles) => {
    return
  }
console.log();
  return (
    articles.length > 0 && (
      <Container>
        <main className="mt-12">
          < div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mb-16" >
            <Card className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block" type={"main"} isEdit={userData?.$id === articles[0].userId} {...articles[0]} />
            <div className="w-full md:w-4/7">
              {loopArticles(articles, "flex flex-col md:flex-row border-solid border-b-2 mb-3 pb-3 border-b-gray-400",1,4)}
            </div>
          </div >
          {loopArticles(articles, "flex flex-col md:flex-row border-solid border-b-2 mb-3 pb-3 border-b-gray-400",4,articles.length)}
        </main >
      </Container>

    )
  )
}

export default Home




