import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState, Dispatcher } from '../../../store'
import {
  startRecording,
  stopRecording
} from '../../../store/common/MediaRecorder/creators'
import { setMode } from '../../../store/pages/MovieWriter/creators'
// ______________________________________________________
//
const PageHooks = () => {
  const mode = useSelector<StoreState, StoreState['MovieWriter']['mode']>(
    state => state.MovieWriter.mode
  )
  const stream = useSelector<StoreState, StoreState['MediaRecorder']['stream']>(
    state => state.MediaRecorder.stream
  )
  const message = useSelector<StoreState, StoreState['MovieWriter']['message']>(
    state => state.MovieWriter.message
  )
  const isShowVideo = React.useMemo(() => {
    return mode === 'countdown' || mode === 'recording'
  }, [mode])
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const dispatch = useDispatch<Dispatcher>()
  const handleClickCenter = React.useCallback(() => {
    switch (mode) {
      case 'ready':
        dispatch(startRecording({ audio: true, video: true }))
        dispatch(setMode('countdown'))
        break
      case 'recording':
        dispatch(stopRecording())
        dispatch(setMode('writing'))
      default:
        break
    }
  }, [mode])
  React.useEffect(() => {
    if (videoRef.current !== null && stream !== null) {
      videoRef.current.srcObject = stream
      videoRef.current.play()
    }
  }, [videoRef, stream])
  return {
    mode,
    message,
    isShowVideo,
    videoRef,
    handleClickCenter
  }
}
// ______________________________________________________
//
export default PageHooks
