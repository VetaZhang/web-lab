import React from 'react';
import { hot } from "react-hot-loader/root";
import Second from './Second';
import { TestContext } from './utils';

// const TestContext = React.createContext('defaultValue');

class MyContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'value',
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: 'value changed' });
    }, 2000);
  }
  
  render() {
    return (
      <TestContext.Provider value={this.state.value}>
        <Second></Second>
      </TestContext.Provider>
    );
  }
}

export default hot(MyContext);
