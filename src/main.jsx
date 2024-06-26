import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux"
import store from './reduxStore/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import Login from './components/pages/Login.jsx'
import EditPost from './components/pages/EditPost.jsx'
import AddPost from './components/pages/AddPost.jsx'
import Article from './components/pages/Article.jsx'
import Signup from './components/pages/Signup.jsx'
import Articles from './components/pages/Articles.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      },
      {
        path: "/signup",
        element: <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      },
      {
        path: "/editArticle/:slug",
        element: <AuthLayout authentication>
          <EditPost/>
        </AuthLayout>
      },
      {
        path: "/compose",
        element: <AuthLayout authentication>
          <AddPost />
        </AuthLayout>
      },
      {
        path: "/article/:slug",
        element: <Article />
      },
      {
        path: "/articles/:category",
        element: <AuthLayout authentication>
          <Articles />
        </AuthLayout>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
         <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
