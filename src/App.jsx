import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from "react-hot-loader/root";

const CodeTraining = lazy(() => import(/* webpackChunkName: 'codeTraining' */ './containers/CodeTraining'));
const MyContext = lazy(() => import(/* webpackChunkName: 'context' */ './containers/Context'));
const Iframe = lazy(() => import(/* webpackChunkName: 'iframe' */ './containers/Iframe'));
const ReduxMiddleware = lazy(() => import(/* webpackChunkName: 'reduxmiddleware' */ './containers/ReduxMiddleware'));

class App extends React.Component {
  render() {
    return (<Suspense fallback={null}>
      <Switch>
        <Route path="/codeTraining" component={CodeTraining} />
        <Route path="/context" component={MyContext} />
        <Route path="/iframe" component={Iframe} />
        <Route path="/reduxMiddleware" component={ReduxMiddleware} />
      </Switch>
    </Suspense>);
  }
}

export default hot(App);