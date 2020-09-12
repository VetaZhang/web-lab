import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from "react-hot-loader/root";

const Hello = lazy(() => import(/* webpackChunkName: 'hello' */ './containers/Hello'));
const MyContest = lazy(() => import(/* webpackChunkName: 'context' */ './containers/Context'));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Suspense fallback={null}>
      <Switch>
        <Route path="/hello" component={Hello} />
        <Route path="/context" component={MyContest} />
      </Switch>
    </Suspense>);
  }
}

export default hot(App);