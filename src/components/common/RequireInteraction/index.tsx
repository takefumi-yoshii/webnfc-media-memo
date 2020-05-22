import React from 'react'
import { useSelector } from 'react-redux'
import Unusable from './unusable'
// ______________________________________________________
//
const Component: React.FC = (props) => {
  const isTouched = useSelector((state) => state.Interaction.isTouched)
  if (isTouched === false) return <Unusable />
  return <>{props.children}</>
}
// ______________________________________________________
//
export default Component
