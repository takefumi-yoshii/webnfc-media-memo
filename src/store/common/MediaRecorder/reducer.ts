import { Reducer } from 'redux'
import { Actions } from '../../actions'
import types from './types'
// ______________________________________________________
//
type State = {
  stream: MediaStream | null
  mediaRecorder: MediaRecorder | null
  isRecording: boolean
  countDown: number | null
}
// ______________________________________________________
//
export const stateFactory = (injects?: Partial<State>): State => ({
  stream: null,
  mediaRecorder: null,
  isRecording: false,
  countDown: null,
  ...injects,
})
export const MediaRecorderOptionsFactory = (
  options?: MediaRecorderOptions
): MediaRecorderOptions => ({
  videoBitsPerSecond: 512000,
  mimeType: 'video/webm; codecs=vp9',
  ...options,
})
// ______________________________________________________
//
export default (initialState = stateFactory()): Reducer<State, Actions> => (
  state = initialState,
  action
): State => {
  switch (action.type) {
    case types.INIT_RECORDER:
      const { stream } = action.payload
      const options = MediaRecorderOptionsFactory(action.payload.options)
      const mediaRecorder = new MediaRecorder(stream, options)
      return { ...state, stream, mediaRecorder }
    case types.ON_DATA_AVAILABLE:
      // for down stream
      return state
    case types.ON_COUNT_DOWN:
      return { ...state, countDown: action.payload.count }
    case types.START_RECORDING:
      return { ...state, isRecording: true }
    case types.STOP_RECORDING:
      return { ...state, isRecording: false }
    case types.DISPOSE_RECORDER:
      if (state.stream !== null) {
        state.stream.getTracks().map((track) => {
          track.stop()
        })
      }
      return { ...state, mediaRecorder: null, stream: null }
    default:
      return state
  }
}
