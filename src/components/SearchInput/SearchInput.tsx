import { FormControl, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { SearchInputProps } from './SearchInput.type'
import { useDebounce } from '../../hooks/useDebounce/useDebounce'

const SearchInput = ({ search, setSearch, handleSubmit }: SearchInputProps) => {
  const [showClearIcon, setShowClearIcon] = useState('none')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === '' ? 'none' : 'flex')
    setSearch(event.target.value)
  }

  const handleClick = (): void => {
    setSearch('')
  }

  return (
    <FormControl>
      <TextField
        size='small'
        variant='outlined'
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start' onClick={handleSubmit}>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position='end'
              style={{ display: showClearIcon }}
              onClick={handleClick}
            >
              <ClearIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  )
}

export default SearchInput
