import { Reducer } from 'redux'
import { LOCATION_CHANGE } from 'connected-react-router'
import { Actions } from '../../actions'
import { handleLocationChange } from '../utils'
import PermanentStorageTypes from '../../common/PermanentStorage/types'
import MediaRecorderTypes from '../../common/MediaRecorder/types'
import types from './types'
// ______________________________________________________
//
export type Mode = 'ready' | 'countdown' | 'recording' | 'writing'
type State = {
  pathname: string
  located: boolean
  blob: Blob | null
  mode: Mode
  message: string
}
// ______________________________________________________
//
export const stateFactory = (injects?: Partial<State>): State => ({
  pathname: '',
  located: false,
  blob: null,
  mode: 'ready',
  message: getMessage('ready'),
  ...injects
})
// ______________________________________________________
//
const getMessage = (mode: Mode) => {
  if (mode === 'countdown') return 'Ready...'
  if (mode === 'recording') return 'Tap Icon & STOP'
  if (mode === 'writing') return 'Touch NFC Tag.'
  return 'Tap Icon & REC'
}
const handleStateByMode = (state: State, mode: Mode) => {
  return { ...state, mode, message: getMessage(mode) }
}
// ______________________________________________________
//
export default (injects?: Partial<State>): Reducer<State, Actions> => (
  state = stateFactory(injects),
  action
): State => {
  if (action.type === LOCATION_CHANGE) {
    return handleLocationChange(state, action, state.pathname, () =>
      stateFactory(injects)
    )
  }
  if (!state.located) return state
  switch (action.type) {
    case types.SET_MODE:
      return handleStateByMode(state, action.payload.mode)
    case PermanentStorageTypes.ON_SUCCESS_PUT:
      return handleStateByMode(state, 'ready')
    case MediaRecorderTypes.ON_START_RECORDING:
      return handleStateByMode(state, 'recording')
    case MediaRecorderTypes.ON_DATA_AVAILABLE:
      return { ...state, blob: action.payload.blob }
    default:
      return state
  }
}
