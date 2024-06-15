import React from 'react'
import { Card, Container } from '../index'

function Articles() {
  return (
    <Container>
      <Card category={"tech"} title={"Article"} content={<p>content........</p>} featuredImage={'https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=1380&t=st=1718363290~exp=1718363890~hmac=846bbdf0bb5f37169c0dc46838a4910708ff9063c658bac8e3613daa032392df'} />
    </Container>
  )
}

export default Articles