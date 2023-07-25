import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home'
import Blog from './Components/Blog/Blog'
import Login from './Components/LoginAndRegistration/Login'
import Registration from './Components/LoginAndRegistration/Registration'
import Teachers from './Components/Teachers/Teachers'
import MyCourses from './Components/MyCourses/MyCourses'
import Courses from './Components/Courses/Courses'
import CourseDetail from './Components/CourseDetail/CourseDetail'
import NotFound from './Components/NotFound/NotFound'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/teachers',
        element: <Teachers />
      },
      {
        path: '/my-courses',
        // element: <PrivateRoute> <MyToys /> </PrivateRoute>
        element: <MyCourses />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/courses/:id',
        element: <CourseDetail />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <RouterProvider router={router} />
    {/* </AuthProvider> */}
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
