import { Store } from 'redux'
import { fork, take, put, call, select } from 'redux-saga/effects'
import { StoreState } from '../../'
import * as creators from './creators'
import types from './types'
// ______________________________________________________
//
function* checkPermissionAPI() {
  const isEnableAPI = window.navigator.permissions !== undefined
  yield put(creators.setEnabledPermissionAPI(isEnableAPI))
}
// ______________________________________________________
//
function getPermissionStatus(permissionDesc: PermissionsDescriptor) {
  // @ts-ignore
  return navigator.permissions.query(permissionDesc)
}
// ______________________________________________________
//
function* watchRequestPermission(store: Store<StoreState>) {
  while (true) {
    try {
      const action: ReturnType<typeof creators.requestPermission> = yield take(
        types.REQUEST_PERMISSION
      )
      const {
        PermissionState: { enabeledPermissionAPI },
      }: StoreState = yield select()
      if (!enabeledPermissionAPI) break
      const { permissionDesc } = action.payload
      const { name } = permissionDesc
      const status: PermissionStatus = yield call(
        getPermissionStatus,
        permissionDesc
      )
      yield put(
        creators.setPermissionState({
          name,
          state: status.state,
        })
      )
      status.onchange = () => {
        store.dispatch(
          creators.setPermissionState({
            name,
            state: status.state,
          })
        )
      }
      if (status.state === 'prompt') {
        yield take(types.RESOLVE_PERMISSION)
        store.dispatch(creators.resolvedPermission())
      }
    } catch (err) {}
  }
}
// ______________________________________________________
//
export default function* (store: Store<StoreState>) {
  yield fork(checkPermissionAPI)
  yield fork(watchRequestPermission, store)
}
