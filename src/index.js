import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import RestaurantMenu from './Components/RestaurantMenu';
import Cart from './Components/Cart';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <Error/>,
  children: [
    {
      path: '/',
      element: <Body/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: "restaurants/:resId",
      element: <RestaurantMenu/>
    },
    {
      path: '/cart',
      element: <Cart/>
    }
  ]
},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
