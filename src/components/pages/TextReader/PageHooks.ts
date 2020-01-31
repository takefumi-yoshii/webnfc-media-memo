import { useSelector } from 'react-redux'
import { StoreState } from '../../../store'
// ______________________________________________________
//
const PageHooks = () => {
  const text = useSelector<StoreState, StoreState['TextReader']['text']>(
    state => state.TextReader.text
  )
  return { text }
}
// ______________________________________________________
//
export default PageHooks
