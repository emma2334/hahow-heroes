import React from 'react'
import styled from 'styled-components'
import { Column } from 'components/Grid'
import { HeroType } from 'utils/hero'

const Thumb = styled.div`
  position: relative;
  overflow: hidden;

  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: #e62429;
  }

  img {
    display: block;
    width: 100%;
    transition: transform 0.3s;
  }
`

const Content = styled.div`
  position: relative;
  padding: 16px 10px 17px;
  background: #151515;
  height: 145px;
  color: #fff;
  z-index: -1;
  letter-spacing: 1px;
  text-transform: uppercase;
  overflow: hidden;

  :before {
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

const Wrapper = styled(Column)`
  position: relative;
  display: inline-block;
  overflow: hidden;

  :hover ${Thumb} img {
    transform: scale(1.1);
  }

  :hover ${Content}:before {
    transform: translate3d(0, 100%, 0);
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
