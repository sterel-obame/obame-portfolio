import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import "slick-carousel/slick/slick.css"; 
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <App /> },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
