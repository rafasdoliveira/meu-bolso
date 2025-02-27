import { RouteObject } from "react-router-dom";
import { ObjetivosPage } from "../pages";

const objetivosRoutes: RouteObject[] = [
    {
        path: "/objetivos",
        element: <ObjetivosPage/>
    }
]

export { objetivosRoutes }