import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Category />,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news/:id',
        element: <NewsLayout />,
        children: [
            {
                path: '/news/:id',
                element: <News />,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;