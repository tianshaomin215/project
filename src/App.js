import React from 'react';
import { Provider } from 'react-redux';
// import TodoList from './components/TodoList';
// import TodoList from './components/TodoList2';
import store from './store/index';
import './App.css';
// import TestContext from './components/TestContext';
import Test from './components/Test';

const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <div>
        <Test></Test>
      </div>
    )
  }
}

// // 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   // 指定 contextType 读取当前的 theme context。
//   // React 会往上找到最近的 theme Provider，然后使用它的值。
//   // 在这个例子中，当前的 theme 值为 “dark”。
//   static contextType = ThemeContext;
//   render() {
//     console.log(this.context);
//     return <div theme={this.context} >{this.context}</div>;
//   }
// }


export default App;
