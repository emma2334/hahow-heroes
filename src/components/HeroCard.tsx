import React from 'react'
import styled from 'styled-components'
import { Grid } from 'components/Grid'
import ContentWrapper from 'components/Content'
import { HeroType } from 'utils/hero'

const Thumb = styled.div`
  position: relative;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    transition: transform 0.3s;
  }
`

const Content = styled(ContentWrapper)`
  height: 145px;
  z-index: -1;
  text-transform: uppercase;
  overflow: hidden;

  :after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #e62429;
    transition: transform 0.3s;
  }
`

const Wrapper = styled(Grid)`
  position: relative;
  display: inline-block;
  overflow: hidden;

  :hover {
    ${Thumb} img {
      transform: scale(1.1);
    }
    ${Content}:after {
      transform: translate3d(0, 100%, 0);
    }
  }

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: 12px 12px 0 0;
    border-color: transparent #fff;
  }
`

const HeroCard = ({ name, image }: HeroType) => {
  return (
    <Wrapper xs={6} md={3}>
      <Thumb>
        <img src={image} alt={name} />
      </Thumb>
      <Content>{name}</Content>
    </Wrapper>
  )
}

export default React.memo(HeroCard)
