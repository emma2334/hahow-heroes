import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.nav`
  margin-bottom: 50px;
  padding: 20px;
  background: #151515;
  text-align: center;
  color: #fff;

  a {
    margin: 0 20px;
    color: #fff;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">About</Link>・<Link to="/heroes">Heroes</Link>
    </StyledNavbar>
  )
}

export default React.memo(Navbar)
