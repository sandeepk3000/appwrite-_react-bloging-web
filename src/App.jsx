
import React, { useEffect } from "react"

import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components/index"
import authService from "./appwrite/auth"
import { useDispatch } from "react-redux"
import { login, logout } from "./reduxStore/userSlice"

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    try {
      authService.getUser()
      .then((userData)=>{
        if (userData) {
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      })
    } catch (error) {
      
    }
  })
  return (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )

  // return <>
  //   <div>
  //     <RTE control={control} defaultValue='' name={"content"} label={"Editor"} />
  //   </div>
  //   <Header />
  //   <Login />
  //   <Signup />
  //   <Select className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //     options={["United States", "Canada", "France"]}

  //   />
  //   <Card category={"Tech"} title={"Completely unstyled, fully accessible UI components"} content='A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries.dfasdfsdfasdfasdfasdfasdfasdfasdfasdfsadfasdfasdfasdfasdfasdfasdfdsfsdfsadfasdfasdfsadfasdfasdfsadfasdfsadfsdfsadfsd' featuredImage={"https://flowbite.com/docs/images/blog/image-2.jpg"} />
  //   <AddPost />
  //   <Article />
  // </>

}

export default App
