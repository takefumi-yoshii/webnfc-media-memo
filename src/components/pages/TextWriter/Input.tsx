import React from 'react'
import styled from 'styled-components'
import colors from '../../common/colors'
// ______________________________________________________
//
type ContainerProps = {
  className?: string
  inputValue: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}
type Props = {
  inputRef: React.MutableRefObject<HTMLInputElement | null>
} & ContainerProps
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <input
    className={props.className}
    type="text"
    ref={props.inputRef}
    value={props.inputValue}
    onChange={props.handleInputChange}
    onBlur={props.handleInputBlur}
    maxLength={8}
  />
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  width: 80%;
  height: 80px;
  padding: 0.5em;
  font-size: 4.8rem;
  text-align: center;
  color: ${colors.white};
  border: none;
  outline: none;
  background-color: transparent;
  font-family: 'Teko', sans-serif;
`
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = (props) => {
  // Set focus when mounted.
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  React.useEffect(() => {
    if (inputRef.current === null) return
    inputRef.current.focus()
  }, [inputRef])
  return <StyledComponent {...props} inputRef={inputRef} />
}
// ______________________________________________________
//
export default Container
