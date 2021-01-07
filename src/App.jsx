import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from "react-hot-loader/root";

const RouterConfigList = [
  {
    path: '/codeTraining',
    component: lazy(() => import(/* webpackChunkName: 'codeTraining' */ './containers/CodeTraining')),
  }, {
    path: '/context',
    component: lazy(() => import(/* webpackChunkName: 'context' */ './containers/Context')),
  }, {
    path: '/iframe',
    component: lazy(() => import(/* webpackChunkName: 'iframe' */ './containers/Iframe')),
  }, {
    path: '/reduxMiddleware',
    component: lazy(() => import(/* webpackChunkName: 'reduxmiddleware' */ './containers/ReduxMiddleware')),
  }, {
    path: '/hooks',
    component: lazy(() => import(/* webpackChunkName: 'hooks' */ './containers/Hooks')),
  },
];

class App extends React.Component {
  render() {
    return (<Suspense fallback={null}>
      <Switch>
        {
          RouterConfigList.map(config => {
            return <Route key={config.path} path={config.path} component={config.component} />;
          })
        }
      </Switch>
    </Suspense>);
  }
}

export default hot(App);