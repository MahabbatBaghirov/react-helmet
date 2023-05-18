import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Services from "../pages/Services";



export const ROUTES = [
    {
        path: "/",
        element: <MainRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
]