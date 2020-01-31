import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Dispatcher } from '../../../store'
import { resolvePermission } from '../../../store/common/PermissionState/creators'
import RoundButton from '../RoundButton'
// ______________________________________________________
//
type Props = {
  className?: string
  handlePushButton: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <h2 className="title">Not granted NFC permission.</h2>
    <RoundButton className="button" onClick={props.handlePushButton}>
      Permit
    </RoundButton>
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
const Container: React.FC = () => {
  const dispatch = useDispatch<Dispatcher>()
  const handlePushButton = React.useCallback(() => {
    dispatch(resolvePermission({ name: 'nfc' }))
  }, [])
  return <StyledComponent handlePushButton={handlePushButton} />
}
// ______________________________________________________
//
export default Container
