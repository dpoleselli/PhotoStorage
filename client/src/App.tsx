import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

export default () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Page Not Found</h1>
        <h3>
          Return <Link to="/">Home</Link>
        </h3>
      </div>
    ),
  },
]);
