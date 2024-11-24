import { Stack, Typography } from '@mui/material'

import { useAppSelector } from '../../redux/hooks'
import { selectUser } from '../../redux/slices/auth.slice'
import { getPersistData } from '../../utils/localstorage/localStorage.utils'

const Home = () => {
  const user = useAppSelector(selectUser)
  const token = getPersistData('token', true)
  return (
    <>
      {token && (
        <Stack>
          <Typography variant='h1'>Welcome, {user.username}!</Typography>
          <Typography variant='body1'>Email: {user.email}</Typography>
          <Typography variant='body1'>Status: {user.statut}</Typography>
          <Typography variant='body1'>Role: {user.role}</Typography>
        </Stack>
      )}
    </>
  )
}

export default Home
