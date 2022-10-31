import { fork, all } from "redux-saga/effects";
import watcherCardSaga from "../features/card/cardSaga";
import watcherUserSaga from "../features/user/userSaga";

export default function* rootSaga() {
  yield all([fork(watcherCardSaga), fork(watcherUserSaga)]);
}
