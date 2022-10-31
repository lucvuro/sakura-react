import { signInWithEmailAndPassword, User } from "firebase/auth";
import { put, call, takeLatest } from "redux-saga/effects";
import { setCurrentUser, setLoadingUser } from "./userSlice";
import { auth } from "../../firebase";
import { sendErrorNotification } from "../../ultils/sendNotification";

function* loginWithCredential({ payload }: any) {
  yield put(setLoadingUser(true));
  yield signInWithEmailAndPassword(auth, payload.email, payload.password).catch(
    (error) => {
      sendErrorNotification(error)
    }
  );
  yield put(setLoadingUser(false));
}

function* logoutUser({ payload }: any) {
  yield put(setLoadingUser(true));
  try {
    yield auth.signOut();
  } catch (err) {
    return err;
  }
  yield put(setCurrentUser(null));
  sessionStorage.clear();
  payload.navigate("/login");
  yield put(setLoadingUser(false));
}

function* watcherUserSaga() {
  yield takeLatest("user/loginWithCredential", loginWithCredential);
  yield takeLatest("user/logoutUser", logoutUser);
}

export default watcherUserSaga;
