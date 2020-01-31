import React from 'react'
import styled from 'styled-components'
import TypingText from '../TypingText'
// ______________________________________________________
//
type Props = {
  className?: string
  text: string
  duration?: number
  fontSize?: number
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <h2 className={props.className}>
    <TypingText text={props.text} duration={props.duration} />
  </h2>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  padding: 30px 0;
  font-size: ${({ fontSize }) => (fontSize ? fontSize / 10 : 4.8)}rem;
  user-select: none;
`
// ______________________________________________________
//
export default StyledComponent
