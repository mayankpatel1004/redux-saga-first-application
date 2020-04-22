import { all, takeLatest } from 'redux-saga/effects';
import fetchNews from './fetchNews';

function* actionWatcher() {
    yield takeLatest('GET_NEWS',fetchNews);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}