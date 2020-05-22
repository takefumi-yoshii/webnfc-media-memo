import types from './types'
import { Mode } from './reducer'
// ______________________________________________________
//
export const setMode = (mode: Mode) => ({
  type: types.SET_MODE,
  payload: { mode },
})
