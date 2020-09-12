import React from 'react';
import { hot } from "react-hot-loader/root";
import styles from './style.less';

class Hello extends React.Component {
  render() {
    return (<div className={styles.container}>
      Hello World!
    </div>);
  }
}

export default hot(Hello);
