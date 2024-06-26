
import React, { useEffect } from "react"

import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components/index"
import authService from "./appwrite/auth"
import { useDispatch } from "react-redux"
import { login, logout } from "./reduxStore/userSlice"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      authService.getUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }))
          } else {
            dispatch(logout())
          }
        })
    } catch (error) {

    }
  })
  return (
    <div className='min-w-screen flex flex-wrap content-between h-full'>
      <div className='w-full block  flex flex-col h-full'>
        <Header />
        <main >
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )

}

export default App
