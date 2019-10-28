import React, { Component } from 'react';

class ThemeButton extends Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    render() {
      console.log(this);
      return (
        <ThemeContext.Consumer>
           <div>button</div>
           <div>{context}</div>
        </ThemeContext.Consumer>
      )
      
    }
  }

export default ThemeButton;