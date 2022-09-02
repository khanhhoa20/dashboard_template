import { useRoutes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { About, Analytics, Comment, Dashboard, Product, ProductList } from "./pages";


export default function Router() {
    return useRoutes([
        {
            element: <Sidebar />,
            children: [
                { path: "/", element: <Dashboard /> },
                { path: "/dashboard", element: <Dashboard /> },
                { path: "/about", element: <About /> },
                { path: "/comment", element: <Comment /> },
                { path: "/analytics", element: <Analytics /> },
                { path: "/product", element: <Product /> },
                { path: "/productList", element: <ProductList /> },
            ]
        }
    ])
}
// /*
// DashboardLayout{
//     Navbar
//     Sidebar
// }

// }
// */