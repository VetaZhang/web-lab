import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
  }

  componentDidMount() {
    window.addEventListener('message', (e)=>{
      const { from, type, payload, parentUrl } = e.data;

      if (type === 'init') {
        console.log('Child receiced msg from parent: ', e.data);
        this.setState({ msg: JSON.stringify(payload) });
        this.parentUrl = parentUrl;
      } else if (type === 'msg') {
        console.log('Child receiced msg from parent: ', e.data);
        this.setState({ msg: JSON.stringify(payload) });
        setTimeout(() => {
          window.parent.postMessage({ from: 'child', type: 'msg', payload: 'Hello parent!' }, this.parentUrl);
        }, 1000);
      }
    }, false);
  }

  render() {
    const { msg } = this.state;
    return (<div>
      <div>I am child iframe page.</div>
      {
        msg ? <div>I reveived a msg from parent page: {msg}</div> : null
      }
    </div>);
  }
}

export default Child;