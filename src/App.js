import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./comps/home/Home";
import Login from "./comps/authentication/login/Login";
import PrivateRoute from "./route/PrivateRoute";
import Signup from "./comps/authentication/registration/Signup";
import Services from "./comps/services/Services";
import ServiceDetail from "./service-detail/ServiceDetail";
import MyReviews from "./comps/account/myReviews/MyReviews";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Signup></Signup>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/services/:id",
          loader: ({ params }) =>
            fetch(`http://localhost:4000/services/${params.id}`),
          element: <ServiceDetail></ServiceDetail>,
        },
        {
          path: "/my-reviews",
          element: (
            <PrivateRoute>
              <MyReviews></MyReviews>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
