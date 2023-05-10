import React from "react";
import "./app.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./common components/Navbar/Navbar";
import Footer from "./common components/Footer/Footer";

function App() {

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/courses",
          element: <Courses/>
        },
      ]
    },
    {
      path: "/signin",
      element: <SignIn/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
  ]);

  return (
    <div className="app_container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
