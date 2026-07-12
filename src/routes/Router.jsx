import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout";
import Home from "../pages/Home/Home";
import Plants from "../pages/Plants/Plants";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddPlant from "../pages/AddPlant/AddPlant";
import EditPlant from "../pages/EditPlant/EditPlant";
import NotFound from "../pages/NotFound/NotFound";

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
        element: <PlantDetails />,
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
            <AddPlant />
          </PrivateRoute>
        ),
      },

      {
  path: "dashboard/edit-plant/:id",
  element: (
    <PrivateRoute>
      <EditPlant />
    </PrivateRoute>
  ),
},
    ],
  },

  // 404 Page
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
