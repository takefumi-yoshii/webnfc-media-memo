import React from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../../../store'
import Unusable from './unusable'
// ______________________________________________________
//
const Component: React.FC = props => {
  const isTouched = useSelector<
    StoreState,
    StoreState['Interaction']['isTouched']
  >(state => state.Interaction.isTouched)
  if (isTouched === false) return <Unusable />
  return <>{props.children}</>
}
// ______________________________________________________
//
export default Component
