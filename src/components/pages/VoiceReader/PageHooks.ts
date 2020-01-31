import React from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../../../store'
// ______________________________________________________
//
const PageHooks = () => {
  const message = useSelector<StoreState, StoreState['VoiceReader']['message']>(
    state => state.VoiceReader.message
  )
  const blob = useSelector<StoreState, StoreState['VoiceReader']['blob']>(
    state => state.VoiceReader.blob
  )
  const [isPlaying, setIsPlaying] = React.useState(false)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const handlePlay = React.useCallback(() => {
    setIsPlaying(true)
  }, [])
  const handleEnded = React.useCallback(() => {
    setIsPlaying(false)
  }, [])
  React.useEffect(() => {
    if (audioRef.current !== null && blob !== null) {
      audioRef.current.src = window.URL.createObjectURL(blob)
      audioRef.current.play()
    }
  }, [audioRef, blob])
  return {
    message,
    isPlaying,
    handlePlay,
    handleEnded,
    audioRef
  }
}
// ______________________________________________________
//
export default PageHooks
