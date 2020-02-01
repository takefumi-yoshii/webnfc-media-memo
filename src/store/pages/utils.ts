import { LocationChangeAction } from 'connected-react-router'
import { select } from 'redux-saga/effects'
import { StoreState } from '../'
// ______________________________________________________
//
// @ reducer
//
export function handleLocationChange<
  S extends { located: boolean },
  A extends LocationChangeAction,
  R extends string
>(state: S, action: A, route: R, dispose: () => S): S {
  if (action.payload.location.pathname === route) {
    return { ...state, located: true }
  }
  if (state.located) return dispose()
  return state
}
// ______________________________________________________
//
// @ saga
//
export function* isLocated(pathname: string) {
  const { router }: StoreState = yield select()
  return router.location.pathname === pathname
}
