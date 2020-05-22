import types from './types'
import { Record } from './reducer'
// ______________________________________________________
//
export const requestGet = (id: string) => ({
  type: types.REQUEST_GET,
  payload: { id },
})
export const requestPut = (record: Record) => ({
  type: types.REQUEST_PUT,
  payload: { record },
})
export const onSuccessRequestGet = (record: Record) => ({
  type: types.ON_SUCCESS_GET,
  payload: { record },
})
export const onSuccessRequestPut = (record: Record) => ({
  type: types.ON_SUCCESS_PUT,
  payload: { record },
})
export const onFailedRequestGet = () => ({
  type: types.ON_FAILED_GET,
})
export const onFailedRequestPut = () => ({
  type: types.ON_FAILED_PUT,
})
