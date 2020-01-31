import React from 'react'
import styled from 'styled-components'
// ______________________________________________________
//
type ContainerProps = {
  className?: string
  updatedAt: Date
}
type Props = {
  mounted: boolean
} & ContainerProps
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <div className={props.className}></div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: #fff;
  transition-property: opacity transform;
  transition-duration: ${props => (props.mounted ? `0.4s` : `0s`)};
  transform: ${props => (props.mounted ? `scale(2)` : `scale(1)`)};
  opacity: ${props => (props.mounted ? 0 : 1)};
  animation-timing-function: ease-out;
`
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = props => {
  const [mounted, setMounted] = React.useState(true)
  const [updatedAt] = React.useState(props.updatedAt)
  React.useEffect(() => {
    if (props.updatedAt === updatedAt) return
    setMounted(false)
    const timer = setTimeout(() => {
      setMounted(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [props.updatedAt, updatedAt])
  return <StyledComponent {...props} mounted={mounted} />
}
// ______________________________________________________
//
export default Container
