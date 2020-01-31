import { Store } from 'redux'
import { fork } from 'redux-saga/effects'
import { StoreState } from './reducers'
import ServiceWorker from './common/ServiceWorker/saga'
import PermanentStorage from './common/PermanentStorage/saga'
import Interaction from './common/Interaction/saga'
import PermissionState from './common/PermissionState/saga'
import MediaRecorder from './common/MediaRecorder/saga'
import NFC from './common/NFC/saga'
import VoiceReader from './pages/VoiceReader/saga'
import VoiceWriter from './pages/VoiceWriter/saga'
import MovieReader from './pages/MovieReader/saga'
import MovieWriter from './pages/MovieWriter/saga'
// ______________________________________________________
//
function* CommonContext(store: Store<StoreState>) {
  yield fork(ServiceWorker)
  yield fork(PermanentStorage)
  yield fork(Interaction, store)
  yield fork(PermissionState, store)
  yield fork(MediaRecorder, store)
  yield fork(NFC, store)
}
function* PagesContext() {
  yield fork(VoiceReader)
  yield fork(VoiceWriter)
  yield fork(MovieReader)
  yield fork(MovieWriter)
}
// ______________________________________________________
//
export default (store: Store<StoreState>) => {
  return function*() {
    yield fork(CommonContext, store)
    yield fork(PagesContext)
  }
}
