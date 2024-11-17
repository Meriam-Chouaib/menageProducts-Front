import { Dispatch, SetStateAction } from 'react'

export interface SearchInputProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  handleSubmit: () => void
}
