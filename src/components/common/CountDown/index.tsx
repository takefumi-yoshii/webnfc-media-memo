import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { StoreState } from '../../../store'
// ______________________________________________________
//
type Props = {
  countDown: number | null
} & ContainerProps
type ContainerProps = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => {
  if (props.countDown === null) return null
  return <div className={props.className}>{props.countDown}</div>
}
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  line-height: 0;
`
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = props => {
  const countDown = useSelector<
    StoreState,
    StoreState['MediaRecorder']['countDown']
  >(state => state.MediaRecorder.countDown)
  return <StyledComponent {...props} countDown={countDown} />
}
// ______________________________________________________
//
export default Container
