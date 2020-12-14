import React from 'react';
import { hot } from "react-hot-loader/root";
import { connect } from 'react-redux';
import { sayHello } from 'actions/hello';

class Redux extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { hello } = this.props;
    return (<div onClick={() => this.props.sayHello('Veta')}>{hello.msg}</div>);
  }
}

export default connect(
  state => ({
    hello: state.hello
  }),
  dispatch => ({
    sayHello: (name) => dispatch(sayHello(name)),
  }),
)(hot(Redux));