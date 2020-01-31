import React from 'react'
import styled from 'styled-components'
// ______________________________________________________
//
type Props = {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <div className={props.className} onClick={props.onClick}>
    {props.children}
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
  animation-name: bounce;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  svg {
    width: 100px;
    height: 100px;
    line-height: 0;
  }
`
// ______________________________________________________
//
export default StyledComponent
