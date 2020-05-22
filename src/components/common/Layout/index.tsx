import React from 'react'
import styled from 'styled-components'
import colors from '../colors'
import Nav from '../Nav'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <div className={props.className}>
    <aside className="aside">
      <Nav />
    </aside>
    {props.children}
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  display: flex;
  height: 100vh;
  > .aside {
    width: 74px;
    height: 100vh;
    background-color: ${colors.black};
  }
`
// ______________________________________________________
//
export default StyledComponent
