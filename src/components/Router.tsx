
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Navbar } from "./Navbar";
import { SignIn } from "../pages/SignIn";
import { Footer } from "./Footer";
import { UserProfile} from "../pages/User";



const Layout =() => {
    return <>
        <Navbar />
            <Outlet />
        <Footer />
    </>
}

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout />
        ),
        errorElement: <p>Oups, ça marche pas</p>,
        children: [
            {
                path: '',
                element: <HomePage />
            }, 
            {
                path: 'sign-in',
                element: <SignIn />
            }, 
            {
                path: 'profile',
                element: <UserProfile />
            }
        ]
    }
])

export function Router() {
    return <RouterProvider router={router} />
}