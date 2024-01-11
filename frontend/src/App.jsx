
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import Dashboard from "./pages/Admin/Dashboard";
import AdminLogin from "./pages/Admin/Login";
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/admin",
      element: <Dashboard />,
    },
    {
      path: "/admin/login",
      element: <AdminLogin />,
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
