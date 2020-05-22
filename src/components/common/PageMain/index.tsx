import React from 'react'
import styled from 'styled-components'
import colors from '../colors'
import Centering from '../Centering'
// ______________________________________________________
//
type Props = {
  className?: string
  backgroundColor: keyof typeof colors
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <Centering className={props.className}>{props.children}</Centering>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  width: calc(100% - 74px);
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => colors[props.backgroundColor]};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
`
// ______________________________________________________
//
export default StyledComponent
