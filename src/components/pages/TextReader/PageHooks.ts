import { useSelector } from 'react-redux'
// ______________________________________________________
//
const PageHooks = () => {
  const text = useSelector((state) => state.TextReader.text)
  return { text }
}
// ______________________________________________________
//
export default PageHooks
