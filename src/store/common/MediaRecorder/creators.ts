import types from './types'
// ______________________________________________________
//
export const initRecorder = (
  stream: MediaStream,
  options?: MediaRecorderOptions
) => ({
  type: types.INIT_RECORDER,
  payload: { stream, options }
})
export const requestRecording = (constraints: MediaStreamConstraints) => ({
  type: types.REQUEST_RECORDING,
  payload: { constraints }
})
export const startRecording = (constraints: MediaStreamConstraints) => ({
  type: types.START_RECORDING,
  payload: { constraints }
})
export const stopRecording = () => ({
  type: types.STOP_RECORDING
})
export const onStartRecording = () => ({
  type: types.ON_START_RECORDING
})
export const onStopRecording = () => ({
  type: types.ON_STOP_RECORDING
})
export const onDataAvailable = (blob: Blob) => ({
  type: types.ON_DATA_AVAILABLE,
  payload: { blob }
})
export const onCountDown = (count: number | null) => ({
  type: types.ON_COUNT_DOWN,
  payload: { count }
})
export const disposeRcorder = () => ({
  type: types.DISPOSE_RECORDER
})
