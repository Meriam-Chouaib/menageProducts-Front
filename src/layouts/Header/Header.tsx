import { Link } from 'react-router-dom'
import { BoxHeader, LinkStyled } from './Header.style'
import { RouteIdEnum } from '../../config/enums/routes.enum'

const Header = () => {
  return (
    <BoxHeader>
      <LinkStyled to={RouteIdEnum.Home}>Products</LinkStyled>
      <LinkStyled to={RouteIdEnum.Empty} style={{ padding: '0px 20px' }}>
        Home
      </LinkStyled>
    </BoxHeader>
  )
}

export default Header
