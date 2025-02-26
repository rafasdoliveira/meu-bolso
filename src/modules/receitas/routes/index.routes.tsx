import { RouteObject } from "react-router-dom";
import { ReceitasPage } from "../pages";

const receitasRoutes: RouteObject[] = [
    {
        path: "/receitas",
        element: <ReceitasPage/>
    }
]

export { receitasRoutes }