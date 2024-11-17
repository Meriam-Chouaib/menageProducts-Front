import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { Product } from '../../types/models/Product'
import { productValidationSchema } from '../../types/schemas/product.validation.schema'
import { Controller, useForm } from 'react-hook-form'

interface ProductModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (product: Product) => void
  title: string
  productToEdit: Product | null
}

const CATEGORIES = ['Clothes', 'Electronics', 'Telephones', 'Other']

const ProductModal: React.FC<ProductModalProps> = ({
  open,
  onClose,
  onSubmit,
  title,
  productToEdit,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productValidationSchema),
    defaultValues: {
      name: '',
      price: 0,
      quantity: 0,
      category: '',
    },
  })

  useEffect(() => {
    if (productToEdit) {
      reset({
        name: productToEdit.name || '',
        price: productToEdit.price || 0,
        quantity: productToEdit.quantity || 0,
        category: productToEdit.category || '',
      })
    }
  }, [productToEdit, reset])

  const onFormSubmit = (data: Product) => {
    onSubmit(data)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='Product Name'
                fullWidth
                margin='normal'
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            name='price'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='Price'
                fullWidth
                margin='normal'
                error={!!errors.price}
                helperText={errors.price?.message}
              />
            )}
          />

          <Controller
            name='quantity'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label='Quantity'
                fullWidth
                margin='normal'
                error={!!errors.quantity}
                helperText={errors.quantity?.message}
              />
            )}
          />

          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <FormControl fullWidth margin='normal' error={!!errors.category}>
                <InputLabel id='category-select-label'>Category</InputLabel>
                <Select
                  {...field}
                  labelId='category-select-label'
                  fullWidth
                  value={field.value || ''}
                >
                  <MenuItem value='clothes'>Clothes</MenuItem>
                  <MenuItem value='electronics'>Electronics</MenuItem>
                  <MenuItem value='telephones'>Telephones</MenuItem>
                  <MenuItem value='other'>Other</MenuItem>
                </Select>
                {errors.category && (
                  <p style={{ color: 'red', marginTop: '0.5rem' }}>
                    {errors.category.message}
                  </p>
                )}
              </FormControl>
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='secondary'>
            Cancel
          </Button>
          <Button type='submit' color='secondary'>
            {title === 'Create Product' ? 'Create' : 'Update'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default ProductModal
