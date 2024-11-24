import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material'
import { Product } from '../../types/models/Product'
import { productValidationSchema } from '../../types/schemas/product.validation.schema'
import { Controller, useForm } from 'react-hook-form'
import FormProvider from '../HookForm/FormProvider'
import RHFTextField from '../HookForm/TextField'
import RHFSelect from '../HookForm/RHFSelect'
import { selectUserId } from '../../redux/slices/auth.slice'
import { useAppSelector } from '../../redux/hooks'

interface ProductModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (product: Product) => void
  title: string
  productToEdit: Product | null
}

const CATEGORIES = [
  { value: 'clothes', label: 'Clothes' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'telephones', label: 'Telephones' },
  { value: 'other', label: 'Other' },
]
const ProductModal: React.FC<ProductModalProps> = ({
  open,
  onClose,
  onSubmit,
  title,
  productToEdit,
}) => {
  const userId = useAppSelector(selectUserId)
  console.log('🚀 ~ userId:', userId)
  const methods = useForm({
    resolver: yupResolver(productValidationSchema),
    defaultValues: {
      name: '',
      price: 0,
      quantity: 0,
      category: '',
      description: '',
      userId: userId,
    },
  })
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = methods
  useEffect(() => {
    if (productToEdit) {
      reset({
        name: productToEdit.name || '',
        price: productToEdit.price || 0,
        quantity: productToEdit.quantity || 0,
        category: productToEdit.category || '',
        description: productToEdit.description || '',
      })
    }
  }, [productToEdit, reset])

  const onFormSubmit = (data: Product) => {
    onSubmit({ ...data, userId: userId })
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <FormProvider onSubmit={handleSubmit(onFormSubmit)} methods={methods}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <RHFTextField
            label='Product Name'
            fullWidth
            margin='normal'
            error={!!errors.name}
            helperText={errors.name?.message}
            name='name'
          />

          <RHFTextField
            label='Price'
            name='price'
            type='number'
            error={!!errors.price}
            helperText={errors.price?.message}
          />

          <RHFTextField
            label='Quantity'
            name='quantity'
            type='number'
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
          />
          <RHFTextField
            label='Product Description'
            fullWidth
            margin='normal'
            error={!!errors.description}
            helperText={errors.description?.message}
            name='description'
          />
          <RHFSelect name='category' label='Category' options={CATEGORIES} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='secondary'>
            Cancel
          </Button>
          <Button type='submit' color='secondary'>
            {title === 'Create Product' ? 'Create' : 'Update'}
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  )
}

export default ProductModal
