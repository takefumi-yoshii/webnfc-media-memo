import React from 'react'
import { useSelector } from 'react-redux'
import Unusable from './unusable'
// ______________________________________________________
//
const Component: React.FC = props => {
  const enabeledPermissionAPI = useSelector(
    state => state.PermissionState.enabeledPermissionAPI
  )
  if (enabeledPermissionAPI === false) return <Unusable />
  return <>{props.children}</>
}
// ______________________________________________________
//
export default Component
