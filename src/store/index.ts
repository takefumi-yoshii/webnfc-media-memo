import 'react-redux'
import { Store, Dispatch } from 'redux'
import { storeFactory } from './storeFactory'
import { StoreState } from './reducers'
import { Actions } from './actions'
// ______________________________________________________
//
declare module 'react-redux' {
  interface DefaultRootState extends StoreState {}
  export function useDispatch<TDispatch = Dispatch<Actions>>(): TDispatch
  export function useStore<S = DefaultRootState>(): Store<S, Actions>
}
// ______________________________________________________
//
export { storeFactory, StoreState, Actions }
