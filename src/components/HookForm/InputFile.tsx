import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { StandardTextFieldProps, TextField } from '@mui/material'
import { LableStyled } from './HookForm.style'

interface TextFieldProps extends StandardTextFieldProps {
  name: string
  label: string
  rules?: any
  type?: 'text' | 'password' | 'file' | 'number' | 'email' | 'url' | 'phone'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputProps?: any
}

export default function InputFile({
  name,
  label,
  rules,
  type,
  ...other
}: TextFieldProps) {
  const { control, setValue } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          variant='standard'
          label={<LableStyled>{label}</LableStyled>}
          type={type}
          {...field}
          fullWidth
          error={!!error}
          helperText={error && error.message && error?.message}
          {...other}
          onChange={(event) => {
            const target = event.target as HTMLInputElement
            if (target.files) {
              const file = target.files[0]
              setValue(name, file)
            }
          }}
          sx={{ marginBottom: '10px' }}
        />
      )}
    />
  )
}
