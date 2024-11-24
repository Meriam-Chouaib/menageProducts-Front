import { ReactNode } from 'react'
import { FormProvider as Form } from 'react-hook-form'

// ----------------------------------------------------------------------
interface FormProviderProps {
  children: ReactNode | ReactNode[]
  methods: typeof Form.arguments
  onSubmit: () => void
}

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: FormProviderProps) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  )
}
