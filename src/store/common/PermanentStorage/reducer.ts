import { Reducer } from 'redux'
import { Actions } from '../../actions'
// ______________________________________________________
//
export type Record = {
  id: string
  blob: Blob
}
type State = {}
// ______________________________________________________
//
export const stateFactory = (injects?: Partial<State>): State => ({
  ...injects,
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
