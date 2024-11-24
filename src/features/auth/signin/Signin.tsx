import { useForm } from 'react-hook-form'
import { Button, Typography } from '@mui/material'
import RHFTextField from '../../../components/HookForm/TextField'
import FormProvider from '../../../components/HookForm/FormProvider'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSigninSchema } from '../../../types/schemas/user.validation.schema'
import { BoxStyled } from './Signin.style'
import { useSigninMutation } from '../../../redux/api/auth/auth.api'
import { signinUser } from '../../../redux/slices/auth.slice'
import { useAppDispatch } from '../../../redux/hooks'
import { toast, ToastContainer } from 'react-toastify'
import { ClipLoader } from 'react-spinners'

interface SignInFormValues {
  email: string
  password: string
}

const SignIn = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch()

  const methods = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSigninSchema), // Integrate Yup with react-hook-form
  })

  const {
    handleSubmit,
    formState: { errors },
  } = methods
  const [signin, { data: userData, isLoading, error }] = useSigninMutation()
  const onSubmit = async (data: SignInFormValues) => {
    try {
      const result: any = await signin(data)

      if (result.data?.status === 200) {
        console.log(
          '🚀 ~ onSubmit ~ result.data?.message:',
          result.data?.message
        )

        toast.success(result.data.message || 'Operation successful!', {
          position: 'top-right',
          autoClose: 1000,
        })
        userData && dispatch(signinUser(userData?.user))
        setTimeout(() => {
          onClose()
        }, 1100)
      } else {
        if (!isLoading && result.data?.status !== 200) {
          result?.error?.data?.message != '' &&
            toast.error(
              result?.error?.data?.message || 'Verify your credentials!',
              {
                position: 'top-right',
                autoClose: 1000,
              }
            )
        }
      }
    } catch (e: any) {
      toast.error(e.message, {
        position: 'top-right',
        autoClose: 1000,
      })
    }
  }

  return (
    <FormProvider onSubmit={handleSubmit(onSubmit)} methods={methods}>
      <BoxStyled>
        <ToastContainer />

        <Typography variant='h4' align='center' gutterBottom>
          Sign In
        </Typography>
        <RHFTextField
          name='email'
          label='Email'
          type='email'
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <RHFTextField
          name='password'
          label='Password'
          type='password'
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type='submit'
          variant='contained'
          color='secondary'
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleSubmit(onSubmit)}
        >
          {isLoading ? (
            <>
              <ClipLoader color='secondary' loading size={20} />
            </>
          ) : (
            <>Connect</>
          )}
        </Button>
      </BoxStyled>
    </FormProvider>
  )
}

export default SignIn
