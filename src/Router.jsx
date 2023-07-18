import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Bookmarks from "./routes/Bookmarks.jsx";
import History from "./routes/History.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import App from "./App.jsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "/history",
                    element: <History />,
                },
                {
                    path: "/bookmarks",
                    element: <Bookmarks />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
