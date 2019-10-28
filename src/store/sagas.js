import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
    try {
        const res = yield axios.get('/api/list');
        const action = initListAction(res.data.data.list);
        yield put(action);
    } catch(e) {
        console.log('/api/list请求失败');
    }
}

//ES6 generator函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;