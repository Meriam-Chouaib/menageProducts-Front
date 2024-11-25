import { useState } from 'react'
import { BoxHeader, LinkModal, LinkStyled } from './Header.style'
import { RouteIdEnum } from '../../config/enums/routes.enum'
import AuthModal from '../../components/Modal/AuthModal'

import { clearLocalStorage } from '../../utils/localstorage/clearLoalStorage'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectIsConnected, signoutUser } from '../../redux/slices/auth.slice'

const Header = () => {
  const dispatch = useAppDispatch()

  const [openModalType, setOpenModalType] = useState<
    'signin' | 'signup' | null
  >(null)

  const handleOpenModal = (type: 'signin' | 'signup') => {
    setOpenModalType(type)
  }

  const handleCloseModal = () => {
    setOpenModalType(null)
  }
  // TODO create logout api and call it here
  const handleLogout = () => {
    clearLocalStorage()
    setOpenModalType(null)
    dispatch(signoutUser())
  }
  const isConnected = useAppSelector(selectIsConnected)
  console.log('🚀 ~ Header ~ isConnectedUser:', isConnected)
  return (
    <BoxHeader>
      <LinkStyled to={RouteIdEnum.PRODUCTS}>Products</LinkStyled>
      {!isConnected && (
        <LinkModal onClick={() => handleOpenModal('signin')}>Signin</LinkModal>
      )}
      <LinkStyled to={RouteIdEnum.Empty}>Home</LinkStyled>
      {isConnected && <LinkModal onClick={handleLogout}>logout</LinkModal>}
      {openModalType && (
        <AuthModal type={openModalType} onClose={handleCloseModal} />
      )}
    </BoxHeader>
  )
}

export default Header
