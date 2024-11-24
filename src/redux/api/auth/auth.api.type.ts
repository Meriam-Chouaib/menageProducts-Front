export interface Isignin {
  email: string
  password: string
}
export interface IUser {
  id: number
  email: string
  password: string
  username: string
  statut: 'ONLINE' | 'OFFLINE'
  role: 'VISITOR' | 'ADMIN' | 'SELLER'
  image: string
  isLogged: boolean
  isActive: boolean
  phone: string
}
export interface SigninServerResponse {
  status?: number
  data: {
    token: string
    user: IUser
  }
  message: string
}
export interface SigninResponse {
  status?: number

  token: string
  user: IUser

  message: string
}
