import {all} from "redux-saga/effects";
import authSaga from "./user/userSaga";

const sagas = function* sagas() {
    yield all([authSaga()]);
}

export default sagas;