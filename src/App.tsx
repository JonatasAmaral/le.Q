import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom';

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/room/:id" component={Room} />
          <Route path="/admin/room/:id" component={AdminRoom} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
