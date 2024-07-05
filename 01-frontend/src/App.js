import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//------
import MainLayout from "./components/MainLayout";
import DashBoard from "./pages/Dashboard";
//-------contact--------------
import ContactList from "./pages/ContactList";
import Create from "./pages/Create";
import Setting from "./pages/Setting";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <DashBoard />,
          index: true,
        },
        {
          path: "/contact",
          element: <ContactList />,
        },
        {
          path: "/contact/create",
          element: <Create />,
        },
        {
          path: "/contact/setting",
          element: <Setting />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
