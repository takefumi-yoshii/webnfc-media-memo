import { fork, take, put, select } from 'redux-saga/effects'
import { route } from '../../../constants'
import { StoreState } from '../../'
import { isLocated } from '../utils'
import NFCTypes from '../../common/NFC/types'
import * as PermanentStorageCreators from '../../common/PermanentStorage/creators'
import * as NFCCreators from '../../common/NFC/creators'
// ______________________________________________________
//
function* watchDetectNFCReadingEvent() {
  while (true) {
    const action: ReturnType<typeof NFCCreators.onReadingEvent> = yield take(
      NFCTypes.ON_READING_EVENT
    )
    if (!(yield isLocated(route.VOICE_WRITER))) continue
    const {
      VoiceWriter: { mode, blob }
    }: StoreState = yield select()
    if (blob === null || mode !== 'writing') continue
    const { serialNumber } = action.payload.event
    const record = { id: `voice:${serialNumber}`, blob }
    yield put(PermanentStorageCreators.requestPut(record))
  }
}
// ______________________________________________________
//
export default function*() {
  yield fork(watchDetectNFCReadingEvent)
}
