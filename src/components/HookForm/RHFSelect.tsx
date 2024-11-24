import React from 'react'
import { useFormContext, Controller, FieldError } from 'react-hook-form'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material'

interface RHFSelectProps {
  name: string
  label: string
  options: { value: string; label: string }[]
  rules?: any
}

const RHFSelect: React.FC<RHFSelectProps> = ({
  name,
  label,
  options,
  rules,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl fullWidth margin='normal' error={!!errors[name]}>
      <InputLabel id={`${name}-select-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            sx={{ margin: '10px 0' }}
            {...field}
            labelId={`${name}-select-label`}
            label={label}
            fullWidth
            value={field.value || ''}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {errors[name] && (
        <FormHelperText>
          {(errors[name] as FieldError)?.message || 'Invalid field'}
        </FormHelperText>
      )}{' '}
    </FormControl>
  )
}

export default RHFSelect
