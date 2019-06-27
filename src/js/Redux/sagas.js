import {all} from 'redux-saga/effects';
import commonSaga from './common/saga';

export default function* rootSaga(getState) {
	yield all([
		commonSaga()
	]);
}
