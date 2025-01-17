import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from 'pages';

// Define as rotas do aplicativo
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
