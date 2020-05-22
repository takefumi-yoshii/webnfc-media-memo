import React from 'react'
import styled from 'styled-components'
import Title from './title'
import Icons from './icons'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <div className={props.className}>
    <div className="title">
      <Title />
    </div>
    <div className="icons">
      <Icons />
    </div>
    <div className="body">
      You can browse the notes you wrote. Text memos are recorded on NFC tags
      and can be shared with other devices. Media data is recorded on your
      device and cannot be shared with other devices.
    </div>
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  font-size: 1.2rem;
  line-height: 1.8;
  font-family: sans-serif;
`
// ______________________________________________________
//
export default StyledComponent
