import { Reducer } from 'redux'
import { Actions } from '../../actions'
import types from './types'
// ______________________________________________________
//
type State = {
  enabeledReaderAPI: boolean
  enabeledWriterAPI: boolean
  reader: NDEFReader | null
  writer: NDEFWriter | null
  isWriting: boolean
  updatedAt: Date
  failedAt: Date
}
// ______________________________________________________
//
export const stateFactory = (injects?: Partial<State>): State => ({
  enabeledReaderAPI: window.NDEFReader !== undefined,
  enabeledWriterAPI: window.NDEFWriter !== undefined,
  reader: null,
  writer: null,
  isWriting: false,
  updatedAt: new Date(),
  failedAt: new Date(),
  ...injects,
})
// ______________________________________________________
//
export default (initialState = stateFactory()): Reducer<State, Actions> => (
  state = initialState,
  action
): State => {
  switch (action.type) {
    case types.INIT_NFC_READER:
      return { ...state, reader: new NDEFReader() }
    case types.INIT_NFC_WRITER:
      return { ...state, writer: new NDEFWriter() }
    case types.SET_IS_WRITING:
      return { ...state, isWriting: action.payload.flag }
    case types.ON_READING_EVENT:
      return { ...state, updatedAt: action.payload.timeStamp }
    case types.ON_COMPLETE_WRITE:
      return { ...state, updatedAt: action.payload.timeStamp }
    case types.ON_ERROR_READ:
      return { ...state, failedAt: action.payload.timeStamp }
    case types.ON_ERROR_WRITE:
      return { ...state, failedAt: action.payload.timeStamp }

    default:
      return state
  }
}
