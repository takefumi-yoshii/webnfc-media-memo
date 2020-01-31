import { Reducer } from 'redux'
import { Actions } from '../../actions'
// ______________________________________________________
//
type State = {}
// ______________________________________________________
//
export const stateFactory = (injects?: Partial<State>): State => ({
  ...injects
})
// ______________________________________________________
//
export default (initialState = stateFactory()): Reducer<State, Actions> => (
  state = initialState,
  action
): State => {
  switch (action.type) {
    default:
      return state
  }
}
