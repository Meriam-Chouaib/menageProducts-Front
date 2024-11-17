import { RouteIdEnum } from '../config/enums/routes.enum'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import RouteObject from '../types/RouteObject'

const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    children: [
      {
        path: RouteIdEnum.Home,
        element: <Home />,
      },
    ],
    element: <MainLayout />,
  },
]
export default RoutesConfig
