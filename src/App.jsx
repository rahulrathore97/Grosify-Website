import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Fruits from './Components/React-Router/Fruits/Fruits'
import Dairy from './Components/React-Router/Dairy/Dairy'
import SeaFood from './Components/React-Router/SeaFood/SeaFood'
import ViewAll from './Components/React-Router/ViewAll/ViewAll'
import Layout from './Components/Layout/Layout'
const App = () => {

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,

    children:[
      {
          path:'/',
  element:<Home/>
      },
       {
   path:'/fruits',
  element:<Fruits/>
},
{
  path:'/dairy',
  element:<Dairy/>
},
{
  path:'/seafood',
 element:<SeaFood/>
},
{
  path:'/allproducts',
 element:<ViewAll/>
}
    ]
  },
])

  return <RouterProvider router={router}/>
}

export default App
