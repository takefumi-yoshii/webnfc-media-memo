import 'react-redux'
import { Store, Dispatch } from 'redux'
import { storeFactory } from './storeFactory'
import { StoreState } from './reducers'
import { Actions } from './actions'
// ______________________________________________________
//
declare module 'react-redux' {
  type SelectorFunction = (state: StoreState) => unknown
  export function useSelector<S extends SelectorFunction, R = ReturnType<S>>(
    selector: S,
    equalityFn?: (left: R, right: R) => boolean
  ): R
  export function useDispatch<TDispatch = Dispatch<Actions>>(): TDispatch
  export function useStore<S = StoreState>(): Store<S, Actions>;
}
// ______________________________________________________
//
export { storeFactory, StoreState, Actions }
