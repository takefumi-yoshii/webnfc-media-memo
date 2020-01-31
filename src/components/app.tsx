import React from 'react'
import { Store } from 'redux'
import { History } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { route } from '../constants'
import { StoreState } from '../store'
import { GlobalStyle } from './common/styles'
import Layout from './common/Layout'
import Home from './pages/Home'
import TextReader from './pages/TextReader'
import TextWriter from './pages/TextWriter'
import VoiceReader from './pages/VoiceReader'
import VoiceWriter from './pages/VoiceWriter'
import MovieReader from './pages/MovieReader'
import MovieWriter from './pages/MovieWriter'
import About from './pages/About'
// ______________________________________________________
//
type Props = {
  store: Store<StoreState>
  history: History<History.PoorMansUnknown>
}
// ______________________________________________________
//
const App: React.FC<Props> = props => (
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path={route.HOME} component={Home} />
          <Route exact path={route.TEXT_READER} component={TextReader} />
          <Route exact path={route.TEXT_WRITER} component={TextWriter} />
          <Route exact path={route.VOICE_READER} component={VoiceReader} />
          <Route exact path={route.VOICE_WRITER} component={VoiceWriter} />
          <Route exact path={route.MOVIE_READER} component={MovieReader} />
          <Route exact path={route.MOVIE_WRITER} component={MovieWriter} />
          <Route exact path={route.ABOUT} component={About} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>
)
// ______________________________________________________
//
export default App
