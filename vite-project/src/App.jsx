import React from 'react'
import Homepage from './routes/homepage/Homepage'
import ListPage from './routes/listPage/listPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routes/layout/Layout'
import Login from './routes/login/login'
const App = ()=> {
  const router = createBrowserRouter([
    {
      path:'/',
      element:(
        <Layout/>
      ),
      children:[
        {
          path:'/',
          element:(
            <Homepage/>
          )
        },
        {
          path:'/list',
          element:(
            <ListPage/>
          )
        },
        {
          path:'/login',
          element:(
            <Login/>
          )
        },
      ] 
    },

    {
      path:'/list',
      element:(
        <ListPage/>
      ) 
    },
  ])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App