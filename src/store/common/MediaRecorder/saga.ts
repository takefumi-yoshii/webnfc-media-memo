import { Store } from 'redux'
import { fork, take, call, put, select, race } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router'
import { StoreState } from '../../'
import * as creators from './creators'
import types from './types'
// ______________________________________________________
//
function getUserMedia(constraints: MediaStreamConstraints) {
  return navigator.mediaDevices.getUserMedia(constraints)
}
// ______________________________________________________
//
function* setupMediaRecorder(store: Store<StoreState>) {
  const {
    MediaRecorder: { mediaRecorder }
  }: StoreState = yield select()
  if (mediaRecorder !== null) {
    mediaRecorder.onstart = () => {
      store.dispatch(creators.onStartRecording())
    }
    mediaRecorder.onstop = () => {
      store.dispatch(creators.onStopRecording())
    }
    mediaRecorder.ondataavailable = (event: any) => {
      const blob = new Blob([event.data], { type: 'video/webm' })
      store.dispatch(creators.onDataAvailable(blob))
    }
  }
}
// ______________________________________________________
//
function* watchLocationChange() {
  while (true) {
    yield take(LOCATION_CHANGE)
    yield put(creators.stopRecording())
  }
}
// ______________________________________________________
//
function countDownStep() {
  return new Promise(resolve => {
    setTimeout(() => resolve(-1), 1000)
  })
}
function* countDownCancel() {
  yield take(LOCATION_CHANGE)
  return false
}
function* countdown() {
  let count = 4
  while (count) {
    const [normal, abnormal] = yield race([
      call(countDownStep),
      call(countDownCancel)
    ])
    if (abnormal !== undefined) break
    count += normal
    yield put(creators.onCountDown(count))
  }
  yield put(creators.onCountDown(null))
}
function* watchStartRecording(store: Store<StoreState>) {
  while (true) {
    const action: ReturnType<typeof creators.startRecording> = yield take(
      types.START_RECORDING
    )
    const { constraints } = action.payload
    const stream: MediaStream = yield call(getUserMedia, constraints)
    yield put(creators.initRecorder(stream))
    yield fork(setupMediaRecorder, store)
    yield call(countdown)
    const {
      MediaRecorder: { mediaRecorder }
    }: StoreState = yield select()
    if (mediaRecorder !== null) {
      mediaRecorder.start()
    }
  }
}
// ______________________________________________________
//
function* watchStopRecording() {
  while (true) {
    yield take(types.STOP_RECORDING)
    const {
      MediaRecorder: { mediaRecorder }
    }: StoreState = yield select()
    if (mediaRecorder !== null) {
      if (mediaRecorder.state !== 'recording') return
      mediaRecorder.stop()
    }
    yield put(creators.disposeRcorder())
  }
}
// ______________________________________________________
//
export default function*(store: Store<StoreState>) {
  yield fork(watchLocationChange)
  yield fork(watchStartRecording, store)
  yield fork(watchStopRecording)
}
