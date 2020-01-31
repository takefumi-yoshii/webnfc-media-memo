import { Reducer } from 'redux'
import { LOCATION_CHANGE } from 'connected-react-router'
import { Actions } from '../../actions'
import { locationDisposer } from '../utils'
import PermanentStorageTypes from '../../common/PermanentStorage/types'
import types from './types'
// ______________________________________________________
//
export type Mode = 'ready' | 'waiting' | 'playing'
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
  if (mode === 'waiting') return 'Waiting Speaker...'
  if (mode === 'playing') return 'Playing...'
  return 'Touch NFC Tag.'
}
const getStateByMode = (state: State, mode: Mode) => {
  return { ...state, mode, message: getMessage(mode) }
}
// ______________________________________________________
//
export default (injects?: Partial<State>): Reducer<State, Actions> => (
  state = stateFactory(injects),
  action
): State => {
  if (action.type === LOCATION_CHANGE) {
    return locationDisposer(state, action, state.pathname, () =>
      stateFactory(injects)
    )
  }
  if (!state.located) return state
  switch (action.type) {
    case types.SET_MODE:
      return getStateByMode(state, action.payload.mode)
    case PermanentStorageTypes.ON_SUCCESS_GET:
      return { ...state, blob: action.payload.record.blob }
    case PermanentStorageTypes.ON_FAILED_GET:
      return { ...state, message: 'No Data...' }
    default:
      return state
  }
}
