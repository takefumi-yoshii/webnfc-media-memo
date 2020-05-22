import React from 'react'
import styled from 'styled-components'
import colors from '../colors'
// ______________________________________________________
//
type Props = {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <button className={props.className} onClick={props.onClick}>
    {props.children}
  </button>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  padding: 0.8em;
  font-weight: bold;
  font-size: 3.2rem;
  border-radius: 2em;
  color: ${colors.white};
  border: 4px solid ${colors.white};
  background-color: transparent;
  font-family: 'Teko', sans-serif;
  line-height: 0.9;
`
// ______________________________________________________
//
export default StyledComponent
