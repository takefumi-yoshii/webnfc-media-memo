import React from 'react'
// ______________________________________________________
//
type Props = {
  text: string
  duration?: number
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ text, duration = 30 }) => {
  const [_text, setText] = React.useState(text)
  React.useEffect(() => {
    let count = 0
    const timer = setInterval(() => {
      count++
      setText(text.slice(0, count))
      if (count === text.length) {
        clearInterval(timer)
      }
    }, duration)
    return () => clearInterval(timer)
  }, [text])
  return <>{_text}</>
}
// ______________________________________________________
//
export default Component
