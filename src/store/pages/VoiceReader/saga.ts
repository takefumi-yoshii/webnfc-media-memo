import { fork, take, put } from 'redux-saga/effects'
import { route } from '../../../constants'
import { isLocated } from '../utils'
import NFCTypes from '../../common/NFC/types'
import * as PermanentStorageCreators from '../../common/PermanentStorage/creators'
import * as NFCcreators from '../../common/NFC/creators'
// ______________________________________________________
//
function* watchDetectNFCReadingEvent() {
  while (true) {
    const action: ReturnType<typeof NFCcreators.onReadingEvent> = yield take(
      NFCTypes.ON_READING_EVENT
    )
    if (!(yield isLocated(route.VOICE_READER))) continue
    const { serialNumber } = action.payload.event
    const id = `voice:${serialNumber}`
    yield put(PermanentStorageCreators.requestGet(id))
  }
}
// ______________________________________________________
//
export default function* () {
  yield fork(watchDetectNFCReadingEvent)
}
