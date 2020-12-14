import React from 'react';
import { hot } from "react-hot-loader/root";
import styles from './style.less';

class Hello extends React.Component {

  test = () => {
    const l1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81];
    const l2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];
    console.log(this.fn(l1, l2));
  }

  fn = (nums1, nums2) => {
    const l1 = nums1.sort((a, b) => a - b);
    const l2 = nums2.sort((a, b) => a - b);
    const len1 = l1.length;
    const len2 = l2.length;
    const result = [];
    let l2Index = 0;
    let num1Count = 0;
    let num2Count = 0;
    console.log(l1, l2);

    l1.forEach((num1, index) => {
      num1Count++;
      if (index + 2 > len1 || l1[index + 1] > num1) {
        for (let i = l2Index; i < len2; i++) {
          const num2 = l2[i];
          l2Index = i;
          if (num2 === num1) {
            num2Count++;
            if (i + 1 >= len2) {
              const count = Math.min(num1Count, num2Count);
              if (count > 0) {
                result.push({ num: num1, count });
              }
            }
          } else if (num2 > num1) {
            const count = Math.min(num1Count, num2Count);
            if (count > 0) {
              result.push({ num: num1, count });
            }
            num1Count = 0;
            num2Count = 0;
            break;
          }
        }
      }
    });
    return result.reduce((list, item) => {
      const { num, count } = item;
      const l = new Array(count).fill(num);
      list.push(...l);
      return list;
    }, []);
  }

  render() {
    return (<div className={styles.container}>
      <div className={styles.btn} onClick={this.test}>Run</div>
    </div>);
  }
}

export default hot(Hello);
