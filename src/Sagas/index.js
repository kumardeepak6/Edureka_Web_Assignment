import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';


function* fetchEvents() {
  const json = yield axios.get('http://localhost:6700/events')
        .then(response => response.data )   
  yield put({ type: "FETCH_EVENTS_SUCCESS", payload: json });
}

function* actionWatcher() {
	
     yield takeLatest('FETCH_EVENTS_BEGIN', fetchEvents)
}




export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
