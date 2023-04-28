import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/category/0' />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/terms',
                element: <Terms />
            }
        ]
    },
    {
        path: '/category',
        element: <Main />,
        children: [
            // {
            //     path: '/',
            //     element: <Category />,
            //     loader: () => fetch('https://the-dragon-news-server-mutah3r.vercel.app/news')
            // },
            {
                path: 'category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-mutah3r.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news/:id',
        element: <NewsLayout />,
        children: [
            {
                path: '/news/:id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-mutah3r.vercel.app/news/${params.id}`)
            }
        ]
    }
]);

export default router;