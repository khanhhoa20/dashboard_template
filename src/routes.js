import { useRoutes } from "react-router-dom";
import Home from "./option_2/pages/Home";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Home />,
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
