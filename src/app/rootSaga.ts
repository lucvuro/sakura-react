import { fork, all } from "redux-saga/effects";
import watcherCardSaga from "../features/card/cardSaga";

export default function* rootSaga() {
  yield all([fork(watcherCardSaga)]);
}
