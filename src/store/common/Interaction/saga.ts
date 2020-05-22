import { Store } from 'redux'
import { StoreState } from '../../'
import * as creators from './creators'
// ______________________________________________________
//
export default function* (store: Store<StoreState>) {
  window.addEventListener(
    'click',
    () => {
      store.dispatch(creators.onTouch())
    },
    { once: true }
  )
  window.addEventListener(
    'touchend',
    () => {
      store.dispatch(creators.onTouch())
    },
    { once: true }
  )
}
