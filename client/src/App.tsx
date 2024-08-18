import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Photos } from "./pages/Photos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/photos",
    element: <Photos />,
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
