import { Reducer } from 'redux'
import { Actions } from '../../actions'
import types from './types'
// ______________________________________________________
//
type State = {
  enabeledPermissionAPI: boolean
  nfc: PermissionState | null
  microphone: PermissionState | null
  camera: PermissionState | null
}
// ______________________________________________________
//
export const stateFactory = (injects?: Partial<State>): State => ({
  enabeledPermissionAPI: window.navigator.permissions !== undefined,
  nfc: null,
  microphone: null,
  camera: null,
  ...injects,
})
// ______________________________________________________
//
export default (initialState = stateFactory()): Reducer<State, Actions> => (
  state = initialState,
  action
): State => {
  switch (action.type) {
    case types.SET_ENABLED_PERMISSION_API:
      return { ...state, enabeledPermissionAPI: action.payload.flag }
    case types.SET_PERMISSION_STATE:
      return { ...state, [action.payload.name]: action.payload.state }
    default:
      return state
  }
}
