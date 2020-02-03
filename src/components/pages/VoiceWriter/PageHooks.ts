import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  startRecording,
  stopRecording
} from '../../../store/common/MediaRecorder/creators'
import { setMode } from '../../../store/pages/VoiceWriter/creators'
// ______________________________________________________
//
const PageHooks = () => {
  const mode = useSelector(state => state.VoiceWriter.mode)
  const message = useSelector(state => state.VoiceWriter.message)
  const dispatch = useDispatch()
  const handleClickIcon = React.useCallback(() => {
    switch (mode) {
      case 'ready':
        dispatch(startRecording({ audio: true, video: false }))
        dispatch(setMode('countdown'))
        break
      case 'recording':
        dispatch(stopRecording())
        dispatch(setMode('writing'))
      default:
        break
    }
  }, [mode])
  return {
    mode,
    message,
    handleClickIcon
  }
}
// ______________________________________________________
//
export default PageHooks
