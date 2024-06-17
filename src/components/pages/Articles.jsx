import React, { useState, useEffect } from 'react'
import { Card, Container } from '../index'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Articles() {
  return (
    <Container>
      <main className="mt-12">
        <Card className="rounded w-full flex flex-col md:flex-row mb-10" coverImage={"https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"} title={"Ignorant branched humanity led now marianne too."} category={"video"} content="Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Oh be me, sure wise sons, no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up." />
      </main >

    </Container>
  )
}

export default Articles