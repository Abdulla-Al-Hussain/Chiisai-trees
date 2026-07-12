import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout";
import Home from "../pages/Home/Home";
import Plants from "../pages/Plants/Plants";
import Plantdetails from "../pages/Plantdetails/Plantdetails";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Addplant from "../pages/Addplant/Addplant";
import Editplant from "../pages/Editplant/Editplant";
import Notfound from "../pages/Notfound/Notfound";

import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      // Home Page
      {
        index: true,
        element: <Home />,
      },

      // All Bonsai Page
      {
        path: "plants",
        element: <Plants />,
      },

      // Plant Details Page
      {
        path: "plant/:id",
        element: <Plantdetails />,
      },

      // Login Page
      {
        path: "login",
        element: <Login />,
      },

      // Dashboard Page
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },

      // Add Bonsai Page
      {
        path: "dashboard/add-plant",
        element: (
          <PrivateRoute>
            <Addplant />
          </PrivateRoute>
        ),
      },

      {
  path: "dashboard/edit-plant/:id",
  element: (
    <PrivateRoute>
      <Editplant />
    </PrivateRoute>
  ),
},
    ],
  },

  // 404 Page
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default router;
