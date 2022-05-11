import { Switch, Route } from 'react-router-dom'
import Main from './views/Main/Main';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';

export default function App() {
  return (
  <Switch>
    <Route path="/character/:id">
      <CharacterDetail />
    </Route>
    <Route path="/">
      <Main />
    </Route>
  </Switch>
  )
}
