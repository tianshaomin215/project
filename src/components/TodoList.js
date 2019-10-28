/** 
 * 多种实现方式
 * 1。不使用store
 * 2。使用redux-thunk
 * 3。使用使用redux-saga
 * 
*/

import React, { Component } from 'react';
import TodoItem from './TodoItem';
import 'antd/dist/antd.css';
import './TodoList.css';
import axios from 'axios';
import { Input, Button, List } from 'antd';
import store from '../store/index';
import { getInitList, initListAction, getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from '../store/actionCreators';

class TodoList extends Component {
    constructor(props) {
        super(props);
        const storeStates = store.getState();
        this.state = {
            // inputValue: '',
            // list: [1, 2, 3],
            inputValue: storeStates.inputValue,
            list: storeStates.list
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitValue = this.submitValue.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);

        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div className="container">
                <Input 
                    className="insert"
                    id="insertArea"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <Button 
                    className="submitBtn"
                    onClick={this.submitValue}
                    type="primary"
                >
                    提交
                </Button>
                {/* <ul className="list">
                    { this.handleList() }
                </ul> */}
                <List
                    className="todo-list"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {this.handleDeleteItem(index)}}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }

    componentDidMount() {
        this.getList();
    }

    handleInputChange(e) {
        //1.普通写法
        // const value = e.target.value;   
        // this.setState(() => ({
        //     inputValue: value
        // }));

        //2.使用store
        // const action = {
        //     type: 'handle_input_change,
        //     value: e.target.value
        // }

        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    submitValue() {
        // this.setState((prevState) => ({
        //     list: [...prevState.list, prevState.inputValue],
        //     inputValue: ''
        // }));

        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleList() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem  
                    key={item}
                    content={item} 
                    index={index} 
                    deleteItem={this.handleDeleteItem}
                />
            )
        })
    }

    handleDeleteItem(index) {   
        // this.setState((prevState) => {
        //     const list = [...prevState.list];
        //     list.splice(index, 1);
        //     return { list }
        // });

        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    getList() {
        //1、不使用任何中间件
        // axios.get('/api/list').then(res => {
        //     // this.setState(() => ({
        //     //     list: res.data.data.list
        //     // }))
        //     const list = res.data.data.list;
        //     const action = initListAction(list);
        //     store.dispatch(action)
        // })

        //2、使用redux-thunk
        // const action = getTodoList();
        // store.dispatch(action);

        //3、使用redux-saga
        const action = getInitList();
        store.dispatch(action);
    }
}

export default TodoList;
