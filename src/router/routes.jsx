import { Navigate, createBrowserRouter } from "react-router-dom"

import App from "../App.jsx"
import PaginaCadastroUsuarios from "../pages/PaginaCadastroUsuarios/PaginaCadastroUsuarios"
import PaginaDashboard from "../pages/PaginaDashboard/PaginaDashboard"
import PaginaCadastroLocais from "../pages/PaginaCadastroLocais/PaginaCadastroLocais"
import PaginaLogin from "../pages/PaginaLogin/PaginaLogin"
import PaginaHome from "../pages/PaginaHome/PaginaHome.jsx"

let isAutenticado = JSON.parse(localStorage.getItem("isAutenticado")) || false

const PrivateRoute = ({children}) => {
    return isAutenticado ? children : <Navigate to="/user-login" />
}
const routes = createBrowserRouter([
    {
        path: "/user-login",
        element: <PaginaLogin />
    },
    {
        path: "/cadastro/usuarios",
        element: <PaginaCadastroUsuarios />
    },
    {
        path: "/",
        element: (
            <PrivateRoute>
                <App />
            </PrivateRoute>
            ),
        children: [
            {
                path: "/home",
                element: <PaginaHome />
            },
            {
                path: "/dashboard",
                element: <PaginaDashboard />
            },
            {
                path: "/cadastro/locais/",
                element: <PaginaCadastroLocais />
            }
        ]
    }
])

export default routes;