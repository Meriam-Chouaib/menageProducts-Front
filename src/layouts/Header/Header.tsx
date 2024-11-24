import React, { useState } from 'react'
import { BoxHeader, LinkModal, LinkStyled } from './Header.style'
import { RouteIdEnum } from '../../config/enums/routes.enum'
import AuthModal from '../../components/Modal/AuthModal'
import { Button } from '@mui/material'
import { getPersistData } from '../../utils/localstorage/localStorage.utils'
import { CONSTANTS } from '../../config/constants/constants'
import { clearLocalStorage } from '../../utils/localstorage/clearLoalStorage'

const Header = () => {
  const [openModalType, setOpenModalType] = useState<
    'signin' | 'signup' | null
  >(null)

  const handleOpenModal = (type: 'signin' | 'signup') => {
    setOpenModalType(type)
  }

  const handleCloseModal = () => {
    setOpenModalType(null)
  }
  // TODO create logout api and call is here
  const handleLogout = () => {
    clearLocalStorage()
    setOpenModalType(null)
  }
  const isConnectedUser = getPersistData(CONSTANTS.TOKEN, true) ? true : false
  console.log('🚀 ~ Header ~ isConnectedUser:', isConnectedUser)
  return (
    <BoxHeader>
      <LinkStyled to={RouteIdEnum.PRODUCTS}>Products</LinkStyled>
      {!isConnectedUser && (
        <LinkModal onClick={() => handleOpenModal('signin')}>Signin</LinkModal>
      )}
      <LinkStyled to={RouteIdEnum.Empty}>Home</LinkStyled>
      {isConnectedUser && <LinkModal onClick={handleLogout}>logout</LinkModal>}
      {openModalType && (
        <AuthModal type={openModalType} onClose={handleCloseModal} />
      )}
    </BoxHeader>
  )
}

export default Header
