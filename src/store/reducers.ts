import 'react-redux'
import { Reducer } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import { route } from '../constants'
import PermanentStorage from './common/PermanentStorage/reducer'
import Interaction from './common/Interaction/reducer'
import PermissionState from './common/PermissionState/reducer'
import MediaRecorder from './common/MediaRecorder/reducer'
import NFC from './common/NFC/reducer'
import TextReader from './pages/TextReader/reducer'
import TextWriter from './pages/TextWriter/reducer'
import VoiceReader from './pages/VoiceReader/reducer'
import VoiceWriter from './pages/VoiceWriter/reducer'
import MovieReader from './pages/MovieReader/reducer'
import MovieWriter from './pages/MovieWriter/reducer'
// ______________________________________________________
//
export type Reducers = ReturnType<typeof reducersFactory>
export type StoreState = {
  [K in keyof Reducers]: Reducers[K] extends Reducer<infer U, any> ? U : never
}
// ______________________________________________________
//
const commonReducersFactory = (history: History<History.PoorMansUnknown>) => ({
  router: connectRouter(history),
  PermanentStorage: PermanentStorage(),
  Interaction: Interaction(),
  PermissionState: PermissionState(),
  MediaRecorder: MediaRecorder(),
  NFC: NFC()
})
const pageReducersFactory = () => ({
  TextReader: TextReader({ pathname: route.TEXT_READER }),
  TextWriter: TextWriter({ pathname: route.TEXT_WRITER }),
  VoiceReader: VoiceReader({ pathname: route.VOICE_READER }),
  VoiceWriter: VoiceWriter({ pathname: route.VOICE_WRITER }),
  MovieReader: MovieReader({ pathname: route.MOVIE_READER }),
  MovieWriter: MovieWriter({ pathname: route.MOVIE_WRITER })
})
// ______________________________________________________
//
export const reducersFactory = (history: History<History.PoorMansUnknown>) => ({
  ...commonReducersFactory(history),
  ...pageReducersFactory()
})
// ______________________________________________________
//
declare module 'react-redux' {
  type SelectorFunction = (state: StoreState) => unknown
  export function useSelector<S extends SelectorFunction, R = ReturnType<S>>(
    selector: (state: StoreState) => R,
    equalityFn?: (left: R, right: R) => boolean
  ): R
}
