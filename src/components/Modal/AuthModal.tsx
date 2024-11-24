import { useState } from 'react'
import { Modal } from '@mui/material'
import SignIn from '../../features/auth/signin/Signin'
import SignUp from '../../features/auth/signup/Signup'
import { AuthModalProps } from './Modal.types'
import { BoxStyled } from './Modal.style'
import { modalConstants } from './Modal.constants'
import QuestionAuth from './QuestionAuth/QuestionAuthSignin'

const AuthModal = ({ type, onClose }: AuthModalProps) => {
  const [formType, setFormType] =
    useState<(typeof modalConstants)[keyof typeof modalConstants]>(type)

  const handleSwitchForm = (
    type: (typeof modalConstants)[keyof typeof modalConstants]
  ) => {
    setFormType(type)
  }

  return (
    <Modal open onClose={onClose}>
      <BoxStyled>
        {formType === modalConstants.signin ? (
          <QuestionAuth
            children={<SignIn onClose={onClose} />}
            goTo='Sign Up'
            onClick={() => handleSwitchForm(modalConstants.signup)}
            question='Don’t have an account?'
          />
        ) : (
          <QuestionAuth
            children={<SignUp />}
            goTo='Sign In'
            onClick={() => handleSwitchForm(modalConstants.signin)}
            question='Already have an account?'
          />
        )}
      </BoxStyled>
    </Modal>
  )
}

export default AuthModal
