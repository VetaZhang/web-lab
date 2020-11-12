import React from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
  }

  componentDidMount() {
    window.addEventListener('message', (e)=>{
      const { from, type, payload } = e.data;

      if (type === 'msg') {
        console.log('Parent receiced msg from child: ', e.data);
        this.setState({ msg: JSON.stringify(payload) });
      }
    }, false);

    setTimeout(() => {
      this.iFrame.contentWindow.postMessage({
        from: 'parent',
        type: 'init',
        payload: 'Init child',
        parentUrl: location.href,
      });
    }, 1000);
    setTimeout(() => {
      this.iFrame.contentWindow.postMessage({
        from: 'parent',
        type: 'msg',
        payload: 'Hello child!',
      });
    }, 2000);
  }

  render() {
    const { msg } = this.state;
    return (<div>
      <div style={{ height: 100 }}>
        <div>I am parent page.</div>
        {
          msg ? <div>I reveived a msg from child page: {msg}</div> : null
        }
      </div>
      <iframe
        ref={dom => { this.iFrame = dom; }}
        src="http://localhost:8000/iframe?type=child"
        width="500"
        height="300"
        style={{ display: 'block' }}
      />
    </div>);
  }
}

export default Parent;