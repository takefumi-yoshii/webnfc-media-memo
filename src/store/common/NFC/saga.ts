import { Store } from 'redux'
import { fork, take, put, call, select } from 'redux-saga/effects'
import { StoreState } from '../../'
import * as creators from './creators'
import PermissionStateTypes from '../PermissionState/types'
import types from './types'
// ______________________________________________________
//
async function setupNFCRead(store: Store<StoreState>) {
  const { reader } = store.getState().NFC
  if (reader === null) return
  reader.onerror = () => {
    store.dispatch(creators.onErrorRead(new Date()))
  }
  reader.onreading = event => {
    store.dispatch(
      creators.onReadingEvent({
        timeStamp: new Date(),
        event
      })
    )
  }
  await reader.scan()
}
// ______________________________________________________
//
function writeNDEFMessage(
  message: NDEFMEssage,
  writer: NDEFWriter,
  store: Store<StoreState>
) {
  return writer
    .write(message)
    .then(() => {
      store.dispatch(creators.onCompleteWrite(new Date()))
    })
    .catch(() => {
      store.dispatch(creators.onErrorWrite(new Date()))
    })
    .finally(() => {
      store.dispatch(creators.setIsWriting(false))
    })
}
// ______________________________________________________
//
function* watchPermissionChange(store: Store<StoreState>) {
  while (true) {
    const { PermissionState, NFC }: StoreState = yield select()
    if (PermissionState.nfc !== 'denied') {
      if (PermissionState.nfc === 'prompt') {
        yield take(PermissionStateTypes.RESOLVED_PERMISSION)
      }
      if (NFC.enabeledReaderAPI && NFC.reader === null) {
        yield put(creators.initNfcReader())
        setupNFCRead(store)
      }
      if (NFC.enabeledWriterAPI && NFC.writer === null) {
        yield put(creators.initNfcWriter())
      }
    }
    yield take(PermissionStateTypes.SET_PERMISSION_STATE)
  }
}
// ______________________________________________________
//
function* watchWriteNFCData(store: Store<StoreState>) {
  while (true) {
    const action: ReturnType<typeof creators.writeNfcData> = yield take(
      types.WRITE_DATA
    )
    const {
      NFC: { writer }
    }: StoreState = yield select()
    if (writer !== null) {
      yield put(creators.setIsWriting(true))
      const message = { records: action.payload.records }
      yield call(writeNDEFMessage, message, writer, store)
    }
  }
}
// ______________________________________________________
//
export default function*(store: Store<StoreState>) {
  yield fork(watchWriteNFCData, store)
  yield fork(watchPermissionChange, store)
}
