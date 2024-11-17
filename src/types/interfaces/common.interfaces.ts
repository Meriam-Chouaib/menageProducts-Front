export interface Paginator {
  page: number
  rowsPerPage: number
  filter?: string

  search?: string
}
