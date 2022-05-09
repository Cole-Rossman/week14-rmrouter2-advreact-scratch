import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './views/Main/Main';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';

export default function App() {
  return (
  <>
  <Header />
  <Switch>
    <Route path="/character/:id">
      <CharacterDetail />
    </Route>
    <Route path="/">
      <Main />
    </Route>
  </Switch>
  </>
  )
}
