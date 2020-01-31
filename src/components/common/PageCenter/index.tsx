import React from 'react'
import styled from 'styled-components'
import EffectDetected from '../EffectDetected'
// ______________________________________________________
//
type Props = {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <div className={props.className} onClick={props.onClick}>
    <EffectDetected />
    <div className="children">{props.children}</div>
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 7px solid #fff;
  border-radius: 200px;
  > .effect,
  > .icon {
    position: absolute;
  }
  .children {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 200px;
    overflow: hidden;
    > * {
      width: 100%;
    }
  }
`
// ______________________________________________________
//
export default StyledComponent
