import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Body from './body'
// ______________________________________________________
//
type ContainerProps = {
  className?: string
}
type Props = {
  updatedAt: Date
} & ContainerProps
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <Body updatedAt={props.updatedAt} />
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = props => {
  const updatedAt = useSelector(state => state.NFC.updatedAt)
  return <StyledComponent {...props} updatedAt={updatedAt} />
}
// ______________________________________________________
//
export default Container
