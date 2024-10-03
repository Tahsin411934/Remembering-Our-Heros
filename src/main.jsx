import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Add from './Pages/Add/Add.jsx';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import Fotage from './Pages/Fotage/Fotage.jsx';
import AddFootage from './Pages/AddFootage/AddFootage.jsx';
import Martyrs from './Pages/Martyrs/Martyrs.jsx';
import History from './Pages/History/History.jsx';
import MartyrDetails from './Pages/MartyrDetails/MartyrDetails.jsx';
import ChineRakhun from './Pages/Chine Rakhun/ChineRakhun.jsx';
import AddPerpetrator from './Pages/AddPerpetrator/AddPerpetrator.jsx';
import Login from './Auth/Login/Login.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Signup from './Auth/SignUp/Signup.jsx';
import Deshboard from './AdminDeshboard/Deshboard.jsx';
import PendingRequest from './Pages/PendingRequest/PendingRequest.jsx';
import Blog from './Pages/Blog/Blog.jsx';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/add-new-martyrs",
        element: <Add></Add>
      },
      {
        path: "/fotage",
        element: <Fotage></Fotage>
      },
      {
        path: "/addfotage",
        element: <AddFootage></AddFootage>
      },
      {
        path: "/Martyrs",
        element: <Martyrs/>
      },
      {
        path: "/history",
        element: <History></History>
      },
      {
        path: "/MartyrDetails/:id",
        element: <MartyrDetails></MartyrDetails>
      },
      {
        path: "/ChineRakhun",
        element: <ChineRakhun/>
      },
      {
        path:"/AddPerpetrator",
        element:<AddPerpetrator></AddPerpetrator>
      },
      {
        path:"/Admin/Deshboard",
        element:<Deshboard></Deshboard>
      },
      {
        path:"/pendingRequest",
        element:<PendingRequest/>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider
      client={queryClient}>
      <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>

  </StrictMode>,
)
