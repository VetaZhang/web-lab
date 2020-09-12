import React from 'react';
import { TestContext } from './utils';

class Third extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = TestContext;

  render() {
    // console.log(TestContext);
    return (
      <div>{this.context}</div>
      // <TestContext.Consumer>{state => <div>{state}</div>}</TestContext.Consumer>
    );
  }
}

export default Third;
