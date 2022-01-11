import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'components/Grid'

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default React.memo(Layout)
