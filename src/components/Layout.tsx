import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from 'components/Grid'
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledContainer = styled(Container)`
  flex: 1;
`

const Layout = () => {
  return (
    <Section>
      <Header />
      <Navbar />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
      <Footer />
    </Section>
  )
}

export default React.memo(Layout)
