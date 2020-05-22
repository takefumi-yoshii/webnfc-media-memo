import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { route } from '../../../constants'
import colors from '../../common/colors'
import Logo from './logo'
import Centering from '../../common/Centering'
import RoundButton from '../../common/RoundButton'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <main className={props.className}>
    <Centering>
      <Logo />
      <Link to={route.ABOUT}>
        <RoundButton className="button">About App</RoundButton>
      </Link>
    </Centering>
  </main>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  box-sizing: border-box;
  width: calc(100% - 74px);
  background-color: ${colors.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  color: ${colors.black};
  > * {
    height: 100vh;
    min-width: 200px;
  }
  .button {
    margin-top: 40px;
    color: ${colors.gray};
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  }
`
// ______________________________________________________
//
export default StyledComponent
