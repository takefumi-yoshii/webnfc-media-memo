import { LocationChangeAction } from 'connected-react-router'
import * as PermanentStorage from './common/PermanentStorage/creators'
import * as PermissionState from './common/PermissionState/creators'
import * as MediaRecorder from './common/MediaRecorder/creators'
import * as Interaction from './common/Interaction/creators'
import * as NFC from './common/NFC/creators'
import * as VoiceReader from './pages/VoiceReader/creators'
import * as VoiceWriter from './pages/VoiceWriter/creators'
import * as MovieReader from './pages/MovieReader/creators'
import * as MovieWriter from './pages/MovieWriter/creators'
// ______________________________________________________
//
type Unwrap<T> = T extends { [K in keyof T]: infer U } ? U : never
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...arg: any) => any ? ReturnType<T[K]> : never
}
type C2A<T> = Unwrap<ReturnTypes<T>>
// ______________________________________________________
//
export type Actions =
  | LocationChangeAction
  | C2A<typeof PermanentStorage>
  | C2A<typeof PermissionState>
  | C2A<typeof MediaRecorder>
  | C2A<typeof Interaction>
  | C2A<typeof NFC>
  | C2A<typeof VoiceReader>
  | C2A<typeof VoiceWriter>
  | C2A<typeof MovieReader>
  | C2A<typeof MovieWriter>
