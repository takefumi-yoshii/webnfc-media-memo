import 'react-redux'
import { Store, Dispatch } from 'redux'
import { storeFactory } from './storeFactory'
import { StoreState } from './reducers'
import { Actions } from './actions'
// ______________________________________________________
//
declare module 'react-redux' {
  interface DefaultRootState extends StoreState {}
  export function useSelector<
    S extends (state: DefaultRootState) => unknown,
    R = ReturnType<S>
  >(selector: S, equalityFn?: (left: R, right: R) => boolean): R
  export function useDispatch<TDispatch = Dispatch<Actions>>(): TDispatch
  export function useStore<S = DefaultRootState>(): Store<S, Actions>
}
// ______________________________________________________
//
export { storeFactory, StoreState, Actions }
