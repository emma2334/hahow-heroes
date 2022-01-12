import React from 'react'
import styled from 'styled-components'
import { Grid } from 'components/Grid'
import ContentWrapper from 'components/Content'
import { HeroType } from 'utils/hero'

const Thumb = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #7c7c7c;
  background-image: url(${({ src }: { src: string }) => src});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s;

  :before {
    content: "";
    display: block;
    margin-top: 100%;
  }
`

const Content = styled(ContentWrapper)`
  height: 145px;
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
    ${Thumb} {
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
    <Wrapper col={{ xs: 6, md: 3 }}>
      <Thumb src={image} />
      <Content>{name}</Content>
    </Wrapper>
  )
}

export default React.memo(HeroCard)
