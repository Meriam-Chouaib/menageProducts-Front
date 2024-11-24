import { RouteIdEnum } from '../config/enums/routes.enum'
import Signup from '../features/auth/signup/Signup'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import RouteObject from '../types/RouteObject'

const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    children: [
      {
        path: RouteIdEnum.Empty,
        element: <Home />,
      },
      {
        path: RouteIdEnum.SIGNUP,
        element: <Signup />,
      },
      { path: RouteIdEnum.PRODUCTS, element: <Products /> },
    ],
    element: <MainLayout />,
  },
]
export default RoutesConfig
