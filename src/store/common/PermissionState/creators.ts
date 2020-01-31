import types from './types'
// ______________________________________________________
//
export const setEnabledPermissionAPI = (flag: boolean) => ({
  type: types.SET_ENABLED_PERMISSION_API,
  payload: { flag }
})
export const setPermissionState = (payload: {
  name: PermissionName | 'nfc'
  state: PermissionState
}) => ({
  type: types.SET_PERMISSION_STATE,
  payload
})
export const requestPermission = (permissionDesc: PermissionsDescriptor) => ({
  type: types.REQUEST_PERMISSION,
  payload: { permissionDesc }
})
export const resolvePermission = (permissionDesc: PermissionsDescriptor) => ({
  type: types.RESOLVE_PERMISSION,
  payload: { permissionDesc }
})
export const resolvedPermission = () => ({
  type: types.RESOLVED_PERMISSION
})
