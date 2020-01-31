import React from 'react'
import styled from 'styled-components'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <div className={props.className}>{props.children}</div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
// ______________________________________________________
//
export default StyledComponent
