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
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider
      client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  </StrictMode>,
)
