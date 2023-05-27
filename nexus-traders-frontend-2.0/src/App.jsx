import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Blogs from "./pages/Blogs/Blogs";
import SingleBlog from "./pages/SingleBlog/Blog";
import Error from "./pages/Error/Error";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Layout from "./Layout";
import Loading from "./common components/Loading/Loading";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/blogs/:slug",
          element: <SingleBlog />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/loading",
      element: <Loading />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <div className="app_container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
