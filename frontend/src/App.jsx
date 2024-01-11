
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import Dashboard from "./pages/Admin/Dashboard";
import AdminLogin from "./pages/Admin/Login";
import { store } from './store/store'
import { Provider } from 'react-redux'
import ProtectUser from "./components/User/Protect/Protect";
import ProtectAdmin from "./components/Admin/Protect/Protect";
import HomeComponent from "./components/User/Home/HomeComponent";
import AuthUser from "./components/User/auth/Auth";
import AuthAdmin from "./components/Admin/auth/Auth";
  
export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthUser><ProtectUser><Home /></ProtectUser></AuthUser>,
    },
    {
      path: "/login",
      element: <AuthUser><Login /></AuthUser>,
    },
    {
      path: "/signup",
      element: <AuthUser><Signup /></AuthUser>,
    },
    {
      path: "/admin",
      element: <AuthAdmin ><ProtectAdmin><Dashboard /></ProtectAdmin></AuthAdmin>
    },
    {
      path: "/admin/login",
      element: <AuthAdmin><AdminLogin /></AuthAdmin>
    }

  ]);

  return (
    <>
      <Provider store={store}>

        
           <RouterProvider router={router} />
        
      </Provider>
    </>
  )
}

export default App
