import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState, Dispatcher } from '../../../store'
import { requestPermission } from '../../../store/common/PermissionState/creators'
import Denied from './denied'
// ______________________________________________________
//
const Component: React.FC = props => {
  const permissionState = useSelector<
    StoreState,
    StoreState['PermissionState']['microphone']
  >(state => state.PermissionState.microphone)
  if (permissionState === 'denied') return <Denied />
  return <>{props.children}</>
}
// ______________________________________________________
//
const Container: React.FC = props => {
  const dispatch = useDispatch<Dispatcher>()
  React.useEffect(() => {
    dispatch(requestPermission({ name: 'microphone' }))
  }, [])
  return <Component>{props.children}</Component>
}
// ______________________________________________________
//
export default Container
