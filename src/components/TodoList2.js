/**
 * 使用react-redux
 */

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './TodoList.css';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from '../store/actionCreators';

class TodoList extends Component {
    constructor(props) {
        super(props);  
    }

    render() {
        const { inputValue, list, changeInputValue, submitValue, handleDeleteItem } = this.props;
        return (
            <div className="container">
                <Input 
                    className="insert"
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <Button 
                    className="submitBtn"
                    type="primary"
                    onClick={submitValue}
                >
                    提交
                </Button>

                <List
                    className="todo-list"
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {handleDeleteItem(index)}}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },

        submitValue() {
            const action = getAddItemAction();
            dispatch(action);
        },

        handleDeleteItem(index) {
            const action = getDeleteItemAction(index);
            dispatch(action);
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

