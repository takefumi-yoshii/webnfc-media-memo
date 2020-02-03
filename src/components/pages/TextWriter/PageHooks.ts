import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { writeNfcData } from '../../../store/common/NFC/creators'
// ______________________________________________________
//
const PageHooks = () => {
  const updatedAt = useSelector(state => state.NFC.updatedAt)
  const isWriting = useSelector(state => state.NFC.isWriting)
  const [inputValue, setValue] = React.useState('')
  const [isEditing, setIsEditing] = React.useState(false)
  const message = React.useMemo(() => {
    if (isWriting) return 'Touch NFC Tag.'
    return isEditing ? 'Input Text.' : 'Tap Pencil Icon.'
  }, [isWriting, isEditing])

  const dispatch = useDispatch()
  const handleClickIcon = React.useCallback(() => {
    setIsEditing(true)
  }, [isEditing])
  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    },
    []
  )
  // Start NDEFWriter.writing
  const handleInputBlur = React.useCallback(() => {
    if (inputValue === '') {
      setIsEditing(false)
      return
    }
    const records = [{ recordType: 'text', data: inputValue }]
    dispatch(writeNfcData(records))
  }, [inputValue, dispatch])

  // Reset input inputValue when touch NFC.
  React.useEffect(() => {
    setValue('')
    setIsEditing(false)
  }, [updatedAt])

  return {
    message,
    isEditing,
    isWriting,
    inputValue,
    handleClickIcon,
    handleInputChange,
    handleInputBlur
  }
}
// ______________________________________________________
//
export default PageHooks
