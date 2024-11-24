export interface UserState {
  email: string
  username: string
  statut: 'ONLINE' | 'OFFLINE'
  role: 'VISITOR' | 'ADMIN' | 'SELLER'
  image: string
  isLogged: boolean
  isActive: boolean
  phone: string
  id: number
}
