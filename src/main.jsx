import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Food from './component/Food/Food.jsx';
import About from './component/Food/About.jsx';
import { foodApi } from './component/LodeFoodApi.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'food',
        element:<Food/>,
        loader: foodApi  ,        
      },
      {
        path:'about',
        element:<About/>     
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
