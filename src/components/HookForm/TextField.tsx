/* eslint-disable @typescript-eslint/no-explicit-any */
// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { StandardTextFieldProps, TextField } from '@mui/material'
import { LableStyled } from './HookForm.style'
// ----------------------------------------------------------------------

interface TextFieldProps extends StandardTextFieldProps {
  name: string
  label: string
  rules?: any
  type?: 'text' | 'password' | 'file' | 'number' | 'email' | 'url' | 'phone'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputProps?: any
}

export default function RHFTextField({
  name,
  label,
  rules,
  ...other
}: TextFieldProps) {
  const { control, register } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          variant='standard'
          label={<LableStyled>{label}</LableStyled>}
          type={other.type}
          {...field}
          fullWidth
          error={!!error}
          helperText={error && error.message && error?.message}
          {...other}
          {...register(name)}
          sx={{ marginBottom: '10px' }}
        />
      )}
    />
  )
}
