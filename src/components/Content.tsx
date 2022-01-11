import styled from 'styled-components'
import { Wrapper } from 'components/Grid'

export default styled(Wrapper)`
  position: relative;
  padding: 16px 10px 17px;
  background: #151515;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #e62429;
  }
`
