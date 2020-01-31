import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState, Dispatcher } from '../../../store'
import { setMode } from '../../../store/pages/MovieReader/creators'
// ______________________________________________________
//
const PageHooks = () => {
  const mode = useSelector<StoreState, StoreState['MovieReader']['mode']>(
    state => state.MovieReader.mode
  )
  const blob = useSelector<StoreState, StoreState['MovieReader']['blob']>(
    state => state.MovieReader.blob
  )
  const message = useSelector<StoreState, StoreState['MovieReader']['message']>(
    state => state.MovieReader.message
  )
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const dispatch = useDispatch<Dispatcher>()
  const handlePlay = React.useCallback(() => {
    dispatch(setMode('playing'))
  }, [])
  const handleEnded = React.useCallback(() => {
    dispatch(setMode('ready'))
    if (videoRef.current === null) return
    videoRef.current.src = ''
  }, [])
  React.useEffect(() => {
    if (videoRef.current !== null && blob !== null) {
      videoRef.current.src = window.URL.createObjectURL(blob)
      videoRef.current.play()
    }
  }, [videoRef, blob])
  return {
    mode,
    message,
    videoRef,
    handlePlay,
    handleEnded
  }
}
// ______________________________________________________
//
export default PageHooks
