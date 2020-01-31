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
  <div className={props.className}>
    <h2 className="title">Denied NFC permission.</h2>
    <p className="message">
      Please unblock NFC access permission from the settings panel.
    </p>
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
    padding: 1em;
    font-size: 3.6rem;
    font-weight: bold;
  }
  > .message {
    padding: 0em 1em;
    line-height: 1.4;
  }
  > .button {
    margin: 0 40px;
  }
`
// ______________________________________________________
//
export default StyledComponent
