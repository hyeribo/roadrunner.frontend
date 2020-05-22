import { all, call } from "redux-saga/effects";
// import { WatchLogin } from "./userSaga";

export default function* SagaRunner() {
  yield all([
    /* user */
    // call(WatchLogin),
  ]);
}
