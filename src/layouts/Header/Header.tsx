import { useEffect, useState } from 'react'
import { BoxHeader, LinkModal, LinkStyled } from './Header.style'
import { RouteIdEnum } from '../../config/enums/routes.enum'
import AuthModal from '../../components/Modal/AuthModal'

import { clearLocalStorage } from '../../utils/localstorage/clearLoalStorage'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectIsConnected, signoutUser } from '../../redux/slices/auth.slice'
import { useLogoutMutation } from '../../redux/api/auth/auth.api'
import { getPersistData } from 'utils/localstorage/localStorage.utils'

const Header = () => {
  const dispatch = useAppDispatch()
  const [logout] = useLogoutMutation()

  const [openModalType, setOpenModalType] = useState<
    'signin' | 'signup' | null
  >(null)

  const handleOpenModal = (type: 'signin' | 'signup') => {
    setOpenModalType(type)
  }

  const handleCloseModal = () => {
    setOpenModalType(null)
  }
  const handleLogout = async () => {
    const result: any = await logout({})

    clearLocalStorage()
    setOpenModalType(null)
    dispatch(signoutUser())
  }
  const isConnected = getPersistData('token', true)

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
