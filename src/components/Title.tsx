import styled from 'styled-components'

export default styled.h2`
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 32px 0;

  :before,
  :after {
    content: "";
    position: absolute;
    display: block;
    width: 20px;
    height: 2px;
    background: #c6a972;
    transform: rotate(-45deg) skewX(45deg);
  }

  :before {
    top: -8px;
    left: 53px;
    transform-origin: left bottom;
  }

  :after {
    bottom: -8px;
    left: -6px;
    transform-origin: right top;
  }
`
