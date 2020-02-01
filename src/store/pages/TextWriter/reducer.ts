import { Reducer } from 'redux'
import { LOCATION_CHANGE } from 'connected-react-router'
import { Actions } from '../../actions'
import { handleLocationChange } from '../utils'
// ______________________________________________________
//
type State = {
  pathname: string
  located: boolean
}
// ______________________________________________________
//
export const stateFactory = (injects?: Partial<State>): State => ({
  pathname: '',
  located: false,
  ...injects
})
// ______________________________________________________
//
export default (injects?: Partial<State>): Reducer<State, Actions> => (
  state = stateFactory(injects),
  action
): State => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return handleLocationChange(state, action, state.pathname, () =>
        stateFactory(injects)
      )
    default:
      return state
  }
}
