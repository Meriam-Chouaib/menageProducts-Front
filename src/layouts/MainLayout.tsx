import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'

import { Container } from '@mui/material'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function MainLayout() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Suspense>
  )
}
