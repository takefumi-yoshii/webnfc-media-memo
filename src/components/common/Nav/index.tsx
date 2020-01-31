import React from 'react'
import { Link } from 'react-router-dom'
import { route } from '../../../constants'
import styled from 'styled-components'
import IconHome from '../icons/IconHome'
import IconText from '../icons/IconText'
import IconPencil from '../icons/IconPencil'
import IconSpeaker from '../icons/IconSpeaker'
import IconMicrophone from '../icons/IconMicrophone'
import IconPlay from '../icons/IconPlay'
import IconMovie from '../icons/IconMovie'
import colors from '../colors'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <nav className={props.className}>
    <ul>
      <li className="home">
        <Link to={route.HOME}>
          <IconHome />
        </Link>
      </li>
      <li className="text-reader">
        <Link to={route.TEXT_READER}>
          <IconText />
        </Link>
      </li>
      <li className="text-writer">
        <Link to={route.TEXT_WRITER}>
          <IconPencil />
        </Link>
      </li>
      <li className="voice-reader">
        <Link to={route.VOICE_READER}>
          <IconSpeaker />
        </Link>
      </li>
      <li className="voice-writer">
        <Link to={route.VOICE_WRITER}>
          <IconMicrophone />
        </Link>
      </li>
      <li className="movie-reader">
        <Link to={route.MOVIE_READER}>
          <IconPlay />
        </Link>
      </li>
      <li className="movie-writer">
        <Link to={route.MOVIE_WRITER}>
          <IconMovie />
        </Link>
      </li>
    </ul>
  </nav>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  background: ${colors.black};
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 74px;
    height: 74px;
    text-decoration: none;
  }
  .home {
    background-color: ${colors.white};
  }
  .text-reader {
    background-color: ${colors.grassGreen};
  }
  .text-writer {
    background-color: ${colors.freshGreen};
  }
  .voice-reader {
    background-color: ${colors.water};
  }
  .voice-writer {
    background-color: ${colors.marine};
  }
  .movie-reader {
    background-color: ${colors.grape};
  }
  .movie-writer {
    background-color: ${colors.raspbery};
  }
`
// ______________________________________________________
//
export default StyledComponent
