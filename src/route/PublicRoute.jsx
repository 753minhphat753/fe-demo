import { Login } from "../screen/Login/Login";
import { Home } from "../screen/Home/Home";

export const PublicRoute = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/enter",
        element: <Login />,
    },
];