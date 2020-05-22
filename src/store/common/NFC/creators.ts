import types from './types'
// ______________________________________________________
//
export const initNfcReader = () => ({
  type: types.INIT_NFC_READER,
})
export const initNfcWriter = () => ({
  type: types.INIT_NFC_WRITER,
})
export const setIsWriting = (flag: boolean) => ({
  type: types.SET_IS_WRITING,
  payload: { flag },
})
export const writeNfcData = (records: NDEFRecordInput[]) => ({
  type: types.WRITE_DATA,
  payload: { records },
})
export const onReadingEvent = (payload: {
  timeStamp: Date
  event: NDEFReadingEvent
}) => ({
  type: types.ON_READING_EVENT,
  payload,
})
export const onCompleteWrite = (timeStamp: Date) => ({
  type: types.ON_COMPLETE_WRITE,
  payload: { timeStamp },
})
export const onErrorRead = (timeStamp: Date) => ({
  type: types.ON_ERROR_READ,
  payload: { timeStamp },
})
export const onErrorWrite = (timeStamp: Date) => ({
  type: types.ON_ERROR_WRITE,
  payload: { timeStamp },
})
