import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componentes/Home/Home.jsx';
import Main from './componentes/Layout/Main.jsx';
import OrderReview from './componentes/OrderReview/OrderReview.jsx';

const router = createBrowserRouter([
{
 path: '/',
 element: <Main></Main>,
 children: [
  {
    path: '/',
    element: <Home></Home>,
    loader: () => fetch('tshirts.json')
  },
  {
    path: 'review',
    element: <OrderReview></OrderReview>
  }
 ]
} 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
