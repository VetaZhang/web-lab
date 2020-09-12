import React from 'react';
import Third from './Third';

class Second extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Third />
    );
  }
}

export default Second;
