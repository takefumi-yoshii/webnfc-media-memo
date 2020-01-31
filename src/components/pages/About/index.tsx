import React from 'react'
import styled from 'styled-components'
import colors from '../../common/colors'
import Writing from './Writing'
import Reading from './Reading'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <main className={props.className}>
    <h2>About App</h2>
    <div className="writing">
      <Writing />
    </div>
    <div className="reading">
      <Reading />
    </div>
    <h2>Intro Video</h2>
    <p>
      <a href="https://vimeo.com/388157513">https://vimeo.com/388157513</a>
    </p>
  </main>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  box-sizing: border-box;
  width: calc(100% - 74px);
  height: 100vh;
  overflow: scroll;
  background-color: ${colors.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  padding: 100px 0;
  text-align: center;
  color: ${colors.black};
  > h2 {
    margin-bottom: 1em;
    font-size: 4.8rem;
  }
  > .writing,
  > .reading {
    margin-bottom: 60px;
    padding: 0 30px;
  }
`
// ______________________________________________________
//
export default StyledComponent
