import { Login } from "../screen/Login/Login";
import { Home } from "../screen/Home/Home";
import { Regist } from "../screen/Login/Regist";

export const PublicRoute = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/enter",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Regist />,
    },
];