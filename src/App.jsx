import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from "react-hot-loader/root";

const Hello = lazy(() => import(/* webpackChunkName: 'hello' */ './containers/Hello'));
const MyContext = lazy(() => import(/* webpackChunkName: 'context' */ './containers/Context'));
const Iframe = lazy(() => import(/* webpackChunkName: 'iframe' */ './containers/Iframe'));

class App extends React.Component {
  render() {
    return (<Suspense fallback={null}>
      <Switch>
        <Route path="/hello" component={Hello} />
        <Route path="/context" component={MyContext} />
        <Route path="/iframe" component={Iframe} />
      </Switch>
    </Suspense>);
  }
}

export default hot(App);