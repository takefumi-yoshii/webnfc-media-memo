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
      You can write your notes on NFC tags. Not only text but also media data
      can be saved. Media data can only be played with this application.
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
