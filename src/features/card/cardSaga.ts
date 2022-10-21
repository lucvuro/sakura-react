import { call, put, takeEvery } from "redux-saga/effects";
import {
  setListCard
} from "./cardSlice";

function* fetchListCard({payload}: any) {
  yield put(setListCard(payload))
}

function* watcherCardSaga() {
  yield takeEvery("card/fetchListCard", fetchListCard);
}

export default watcherCardSaga;
