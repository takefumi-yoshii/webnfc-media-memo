import { Reducer } from 'redux'
import { Actions } from '../../actions'
import types from './types'
// ______________________________________________________
//
type State = {
  isTouched: boolean
}
// ______________________________________________________
//
export const stateFactory = (injects?: Partial<State>): State => ({
  isTouched: false,
  ...injects
})
// ______________________________________________________
//
export default (initialState = stateFactory()): Reducer<State, Actions> => (
  state = initialState,
  action
): State => {
  switch (action.type) {
    case types.ON_TOUCH:
      return { ...state, isTouched: true }
    default:
      return state
  }
}
