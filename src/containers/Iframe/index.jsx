import React from 'react';
import Parent from './Parent';
import Child from './Child';

class Iframe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isChild = location.search.includes('child');

    return (<div style={{ padding: 50 }}>
      {
        isChild ? <Child /> : <Parent />
      }
    </div>);
  }
}

export default Iframe;