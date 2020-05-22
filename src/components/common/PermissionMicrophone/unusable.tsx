import React from 'react'
import styled from 'styled-components'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <div className={props.className}>
    <h2 className="title">Not available Microphone.</h2>
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  > .title {
    padding: 1em 2em;
    font-size: 3.6rem;
    font-weight: bold;
  }
  > .button {
    margin: 0 40px;
  }
`
// ______________________________________________________
//
export default StyledComponent
