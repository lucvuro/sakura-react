import { doc, DocumentReference, DocumentSnapshot, getDoc } from "firebase/firestore";
import { call, put, takeEvery } from "redux-saga/effects";
import { database } from "../../firebase";
import {
  setCard,
  setListCard,
  setLoading
} from "./cardSlice";

function* fetchListCard({payload}: any) {
  yield put(setListCard(payload))
}

function* getCardFromFireStore({payload}: any){
  yield put(setLoading(true))
  const docRef: DocumentReference = yield doc(database, "cards",payload)
  const docSnap: DocumentSnapshot = yield call(getDoc,docRef)
  yield put(setCard(docSnap.data()))
  yield put(setLoading(false))
}

function* watcherCardSaga() {
  yield takeEvery("card/fetchListCard", fetchListCard);
  yield takeEvery("card/getCardFormFireStore", getCardFromFireStore);
}

export default watcherCardSaga;
