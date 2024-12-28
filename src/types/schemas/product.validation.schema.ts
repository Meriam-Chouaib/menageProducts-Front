import * as Yup from 'yup'

export const productValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Name must contain only letters and spaces')
    .required('Name is required'),
  price: Yup.number()
    .typeError('Price must be a number')
    .positive('Price must be greater than zero')
    .required('Price is required'),
  quantity: Yup.number()
    .typeError('Quantity must be a number')
    .integer('Quantity must be an integer')
    .positive('Quantity must be greater than zero')
    .required('Quantity is required'),
  category: Yup.string().required('Category is required'),
  description: Yup.string().required('description is required'),
  userId: Yup.number().required(''),
  images: Yup.array()
    .of(Yup.mixed<File>().required('Each image is required'))
    .min(1, 'At least one image is required')
    .required('Product image is required'),
})
