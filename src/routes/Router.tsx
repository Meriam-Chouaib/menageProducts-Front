import { useRoutes } from 'react-router-dom'
import RoutesConfig from './Routes.config'

export function Router() {
  return useRoutes(RoutesConfig)
}

export default Router
