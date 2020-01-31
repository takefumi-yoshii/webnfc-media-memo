import localforage from 'localforage'
import { fork, take, put, call } from 'redux-saga/effects'
import { Record } from './reducer'
import types from './types'
import * as creators from './creators'
// ______________________________________________________
//
function getItem(localforageStore: typeof localforage, id: string) {
  return localforageStore.getItem(id)
}
function* watchRequestGET(localforageStore: any) {
  while (true) {
    const action: ReturnType<typeof creators.requestGet> = yield take(
      types.REQUEST_GET
    )
    const { id } = action.payload
    const blob: Blob = yield call(getItem, localforageStore, id)
    if (blob) {
      yield put(creators.onSuccessRequestGet({ id, blob }))
    } else {
      yield put(creators.onFailedRequestGet())
    }
  }
}
// ______________________________________________________
//
function putItem(localforageStore: any, record: Record) {
  return localforageStore.setItem(record.id, record.blob)
}
function* watchRequestPUT(localforageStore: any) {
  while (true) {
    const action: ReturnType<typeof creators.requestPut> = yield take(
      types.REQUEST_PUT
    )
    const record: Record = yield call(
      putItem,
      localforageStore,
      action.payload.record
    )
    if (record) {
      yield put(creators.onSuccessRequestPut(record))
    } else {
      yield put(creators.onFailedRequestPut())
    }
  }
}
// ______________________________________________________
//
export default function*() {
  const localforageStore = localforage.createInstance({
    driver: localforage.INDEXEDDB,
    name: 'webNFCMediaMemo',
    version: 1.0,
    storeName: 'store'
  })
  yield fork(watchRequestGET, localforageStore)
  yield fork(watchRequestPUT, localforageStore)
}
