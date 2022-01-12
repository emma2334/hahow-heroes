import React from 'react'
import styled from 'styled-components'
import { RWD } from 'utils/grid'

const StyledHeader = styled.header`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 175px;
  margin-bottom: 50px;
  background-image: url(/hahow.jpg);
  background-size: cover;
  background-position: center top;
  ${RWD('lg', 'height: 300px;')}

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: invert(1);
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    color: #fff;
    text-transform: uppercase;
    z-index: 1;
    backdrop-filter: blur(5px);
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <h1>Hahow Heroes</h1>
    </StyledHeader>
  )
}

export default React.memo(Header)
