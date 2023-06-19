import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
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
  ]);

  return (
    <div className="app_container">
      {/* <Helmet>
        <meta
          name="description"
          content="Nexus Traders Trading School. Turning Wealth into Empire !!"
        />
        <meta
          name="keywords"
          content="Best Trading School in Thane, \
          Best Stock Maket Trading School in Thane, \
          Best Share Maket Trading School in Thane, \
          Best Trading Classes in Thane, \
          Best Stock Maket Trading Classes in Thane, \
          Best Share Maket Trading Classes in Thane, \
          Best Trading Coaching in Thane, \
          Best Stock Maket Trading Coaching in Thane, \
          Best Share Maket Trading Coaching in Thane, \
          Trading Coaching, \
          Trading Classes, \
          Stock Market Trading Coaching, \
          Share Market Trading Coaching, \
          Stock Market Trading Classes, \
          Share Market Trading Classes, \
          Forex Trading Coaching, \
          Forex Trading Classes,"
        />
      </Helmet> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
