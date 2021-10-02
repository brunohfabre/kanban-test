import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Kanban } from './pages/Kanban';
import { Note } from './pages/Note';
import { Virtual } from './pages/Virtual';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/kanban' component={Kanban} />
      <Route path='/note' component={Note} />
      <Route path='/virtual' component={Virtual} />
    </Switch>
  )
}