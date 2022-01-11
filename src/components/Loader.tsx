import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`
const Bounce = styled.div`
  width: 18px;
  height: 18px;
  background-color: #e62529;

  border-radius: 100%;
  display: inline-block;
  animation: ${animation} 1.4s infinite ease-in-out both;

  animation-delay: ${({ delay }: { delay?: number }) => delay}s;
`

const Spinner = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
`

const Loader = () => {
  return (
    <Spinner>
      <Bounce delay={0.32} />
      <Bounce delay={0.16} />
      <Bounce />
    </Spinner>
  )
}

export default React.memo(Loader)
