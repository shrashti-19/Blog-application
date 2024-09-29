import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux';
import store from './store/store.js';
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./components/Login.jsx";
import Protected from "./components/AuthLayout.jsx";
import AddPost from "./pages/AddPost.jsx";
import SignUp from "./pages/SignUp.jsx";
import EditPost from "./pages/EditPost.jsx";
import AllPost from "./pages/AllPost.jsx";
import Post from "./pages/Post.jsx";
import Signup from "./components/Signup.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:(
          <Protected authentication={false}>
            <Login/>
          </Protected>
        )
      },
      {
        path:'/signup',
        element:(
          <Protected authentication={false}>
            <SignUp/>
          </Protected>
        )  
      },
      {
        path:'/all-posts',
        element:(
          <Protected authentication={" "}>
            <AllPost/>
          </Protected>
        )
      },
      {
        path:'/add-post',
        element:(
          <Protected authentication={" "}>
            <AddPost/>
          </Protected>
        )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <Protected authentication={" "}>
            <EditPost/>
          </Protected>
        )


      },
      {
        path:'/post/:slug',
        element:<Post/>,
      },

    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= {store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
