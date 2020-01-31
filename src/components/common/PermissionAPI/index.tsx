import React from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../../../store'
import Unusable from './unusable'
// ______________________________________________________
//
const Component: React.FC = props => {
  const enabeledPermissionAPI = useSelector<
    StoreState,
    StoreState['PermissionState']['enabeledPermissionAPI']
  >(state => state.PermissionState.enabeledPermissionAPI)
  if (enabeledPermissionAPI === false) return <Unusable />
  return <>{props.children}</>
}
// ______________________________________________________
//
export default Component
