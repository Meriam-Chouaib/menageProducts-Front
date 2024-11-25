import { useForm } from 'react-hook-form'

import { Button, MenuItem } from '@mui/material'
import FormProvider from '../../../components/HookForm/FormProvider'
import RHFTextField from '../../../components/HookForm/TextField'

const SignUp = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      username: '',
      statut: 'ONLINE',
      role: 'USER',
      image: '',
      isLogged: true,
      isActive: true,
      phone: '',
    },
  })

  const onSubmit = (data: any) => {}

  return (
    <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
        <h2>Signup</h2>

        {/* Username */}
        <RHFTextField
          name='username'
          label='Username'
          type='text'
          rules={{ required: 'Username is required' }}
        />

        {/* Email */}
        <RHFTextField
          name='email'
          label='Email'
          type='email'
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email format',
            },
          }}
        />

        {/* Password */}
        <RHFTextField
          name='password'
          label='Password'
          type='password'
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />

        {/* Phone */}
        <RHFTextField
          name='phone'
          label='Phone'
          type='phone'
          rules={{
            required: 'Phone is required',
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message: 'Invalid phone number',
            },
          }}
        />

        {/* Statut */}
        <RHFTextField name='statut' label='Statut' select>
          <MenuItem value='ONLINE'>Online</MenuItem>
          <MenuItem value='OFFLINE'>Offline</MenuItem>
        </RHFTextField>

        {/* Role */}
        <RHFTextField name='role' label='Role' select>
          <MenuItem value='USER'>User</MenuItem>
          <MenuItem value='ADMIN'>Admin</MenuItem>
        </RHFTextField>

        {/* Image */}
        <RHFTextField
          name='image'
          label='Profile Image URL'
          type='file'
          rules={{
            pattern: {
              value: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i,
              message: 'Invalid image URL',
            },
          }}
        />

        <Button
          type='submit'
          variant='contained'
          color='secondary'
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Signup
        </Button>
      </div>
    </FormProvider>
  )
}

export default SignUp
