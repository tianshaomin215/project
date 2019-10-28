import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content } = this.props;
        return (
            <li>
                {content}
                <span className="delete" onClick={this.handleClick}>删除</span>
            </li>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
 }

 //props类型声明
 TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), //字符串或者数字
    index: PropTypes.number,
    deleteItem: PropTypes.func.isRequired
 }

 //props默认值
 TodoItem.defaultProps = {
    index: 0
 }
 
 export default TodoItem;