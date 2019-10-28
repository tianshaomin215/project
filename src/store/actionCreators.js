import { INIT_LIST_ACTION, HANDLE_INPUT_CHANGE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_INIT_LIST } from './actionTypes';
// import axios from 'axios';

const initListAction = (list) => ({
    type: INIT_LIST_ACTION,
    list
});

const getInputChangeAction = (value) => ({
    type: HANDLE_INPUT_CHANGE,
    value
});

const getAddItemAction = (value) => ({
    type: ADD_TODO_ITEM
});

const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

//redux-thunk处理请求
const getTodoList = () => {
    // return (dispatch) => {
    //     axios.get('/api/list').then(res => {
    //         const list = res.data.data.list;
    //         const action = initListAction(list);
    //         dispatch(action);
    //     })
    // }
}

const getInitList = () => ({
    type: GET_INIT_LIST
})

export { initListAction, getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList, getInitList};