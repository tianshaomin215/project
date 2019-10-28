import React from 'react';
import Confirm from './components/Confirm';

class App extends React.Component {

  render() {
    return (
      <div>
        测试
      </div>
    )
  }

  async componentDidMount() {
      let res = await Confirm.show('确定删除吗');
      if(res) {
          console.log('是');
      } else {
          console.log('否');
      }
  }
}

export default App;
