import React, { createContext, useState } from 'react';
import BackImage from "./Image/mainbg.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import News from './components/News/News';
import Login from './components/Login/Login';
import Info from './components/Information/Info';
import Details from './components/Details/Details';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContex = createContext();

function App() {
  const [contexData, setContexData] = useState({});
  const [loginData, setLoginData] = useState({});

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "/",
          loader: () => fetch("https://travel-server-rust.vercel.app/place"),
          element: <News />
        },
        {
          path: "/info",
          element: <Info />
        },
        {
          path: "/contact",
          element: <News />
        },
        {
          path: "/details",
          element: <PrivateRoute><Details /></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login />
        },
      ]
    }
  ])

  const data = { contexData, setContexData, loginData, setLoginData };
  return (
    <div className="backImage" style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 57%)),url(${BackImage})` }}>
      <userContex.Provider value={data}>
        <RouterProvider router={router} />
      </userContex.Provider>
    </div>
  )
}
export default App;