import { SigninResponse, SigninServerResponse } from './auth.api.type'

export const decodeSigninResponse = (
  response: SigninServerResponse
): SigninResponse => {
  return {
    status: response.status,
    token: response.data.token,
    user: response.data.user,
    message: response.message,
  }
}
