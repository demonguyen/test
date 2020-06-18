import _ from 'lodash';
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { LoadingContext } from '../../contexts/LoadingProvider';
import GlobalLoading from '../GlobalLoading';

function App() {
  const { loading } = useContext(LoadingContext);
  const renderRouter = () =>
    _.map(ROUTES, ({ path, component, exact }) => (
      <Route key={path} path={path} component={component} exact={exact} />
    ));

  return (
    <>
      {loading && <GlobalLoading />}
      <Switch>{renderRouter()}</Switch>
    </>
  );
}

export default App;
