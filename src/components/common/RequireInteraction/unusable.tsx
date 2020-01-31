import React from 'react'
import styled from 'styled-components'
import RoundButton from '../RoundButton'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <RoundButton className={props.className}>Start App</RoundButton>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  padding: 3rem 6rem;
`
// ______________________________________________________
//
export default StyledComponent
