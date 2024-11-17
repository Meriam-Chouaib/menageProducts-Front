import { useState } from 'react'
import { Paginator } from '../types/interfaces/common.interfaces'

export default function usePaginator(initialPaginator: Paginator) {
  const [paginator, setPaginator] = useState<Paginator>(initialPaginator)

  const onChangePage = (page: number) => {
    setPaginator((prevPaginator) => ({
      ...prevPaginator,
      page,
    }))
  }

  const onChangeRowsPerPage = (rowsPerPage: number) => {
    setPaginator((prevPaginator) => ({
      ...prevPaginator,
      rowsPerPage,
    }))
  }

  return {
    paginator,
    onChangePage,
    onChangeRowsPerPage,
  }
}
