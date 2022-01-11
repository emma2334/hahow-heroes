import React from 'react'
import styled from 'styled-components'

const btnColor = '#e62429'
const hoverColor = '#9d1216'
const StyledButton = styled.button`
  position: relative;
  padding: 0;
  border: 0;
  background: transparent;
  color: #fff;
  line-height: 0.9;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  :disabled,
  :hover {
    :before,
    :after {
      background: ${hoverColor};
    }
    span {
      background: ${hoverColor};
      :before {
        border-color: ${hoverColor} transparent;
      }
      :after {
        border-color: transparent ${hoverColor};
      }
    }
  }

  :before,
  :after {
    content: "";
    display: block;
    height: 16px;
    background: ${btnColor};
  }
  :before {
    margin-left: 16px;
  }
  :after {
    margin-right: 16px;
  }

  span {
    display: block;
    padding: 0 35px;
    background-color: ${btnColor};

    :before,
    :after {
      content: "";
      position: absolute;
      display: block;
      border: solid transparent;
      border-width: 0 0 16px 16px;
    }
    :before {
      top: 0;
      left: 0;
      border-color: ${btnColor} transparent;
    }
    :after {
      bottom: 0;
      right: 0;
      border-color: transparent ${btnColor};
    }
  }
`

interface PropType {
  disabled?: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ onClick, disabled, children }: PropType) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      <span>{children}</span>
    </StyledButton>
  )
}

export default React.memo(Button)
