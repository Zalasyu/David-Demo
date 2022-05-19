import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Dashboard from './views/Dashboard'

function App() {
  return (
  <BrowserRouter>
  <Switch>
    <Route path='/' component={Dashboard}/>
  </Switch>
  </BrowserRouter>

  );
}

export default App;
