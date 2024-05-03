import { createBrowserRouter } from "react-router-dom"

import App from "../App.jsx"
import PaginaCadastroUsuarios from "../pages/PaginaCadastroUsuarios/PaginaCadastroUsuarios"
import PaginaDashboard from "../pages/PaginaDashboard/PaginaDashboard"
import PaginaCadastroLocais from "../pages/PaginaCadastroLocais/PaginaCadastroLocais"
import PaginaLogin from "../pages/PaginaLogin/PaginaLogin"
import ListaLocais from "../pages/ListaLocais/ListaLocais"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/dashboard",
                element: <PaginaDashboard />
            },
            {
                path: "/cadastro-locais",
                element: <PaginaCadastroLocais />
            },
            {
                path: "/user-login",
                element: <PaginaLogin />
            },
            {
                path: "/user-register",
                element: <PaginaCadastroUsuarios />
            },
            {
                path: "/lista-locais",
                element: <ListaLocais />
            }
        ]
    }
])

export default routes;