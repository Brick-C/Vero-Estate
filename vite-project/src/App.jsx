import React from "react";
import Homepage from "./routes/homepage/Homepage";
import ListPage from "./routes/listPage/listPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import Login from "./routes/login/login";
import SinglePage from "./routes/singlePage/singlePage";
import Profile from "./routes/profile/profilePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: ":id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/list",
      element: <ListPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
