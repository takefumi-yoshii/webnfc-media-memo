import { Reducer } from 'redux'
import { LOCATION_CHANGE } from 'connected-react-router'
import { Actions } from '../../actions'
import { handleLocationChange } from '../utils'
import NFCTypes from '../../common/NFC/types'
import { joinRecordsMessage } from './processors'
// ______________________________________________________
//
type State = {
  pathname: string
  located: boolean
  text: string | null
}
// ______________________________________________________
//
export const stateFactory = (injects?: Partial<State>): State => ({
  pathname: '',
  located: false,
  text: null,
  ...injects,
})
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
    case NFCTypes.ON_READING_EVENT:
      const text = joinRecordsMessage(action.payload.event.message)
      return { ...state, text }
    default:
      return state
  }
}
