import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestPermission } from '../../../store/common/PermissionState/creators'
import Prompt from './prompt'
import Denied from './denied'
import Unusable from './unusable'
// ______________________________________________________
//
const Component: React.FC = props => {
  const isEnabeledNFCAPI = useSelector(state => state.NFC.enabeledReaderAPI)
  const permissionState = useSelector(state => state.PermissionState.nfc)
  if (isEnabeledNFCAPI === false) return <Unusable />
  if (permissionState === 'denied') return <Denied />
  if (permissionState === 'prompt') return <Prompt />
  return <>{props.children}</>
}
// ______________________________________________________
//
const Container: React.FC = props => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(requestPermission({ name: 'nfc' }))
  }, [])
  return <Component>{props.children}</Component>
}
// ______________________________________________________
//
export default Container
