import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { onSnapshot } from "firebase/firestore";
import { RootState } from "../../app/store";
export interface CardState {
  listCard: any[];
  loading: boolean;
  error: boolean;
}

const initialState: CardState = {
  listCard: [],
  loading: false,
  error: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const cardSlice = createSlice({
  name: "card",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setListCard: (state: any, action: any) => {
      return {
        ...state,
        listCard: action.payload,
        loading: false,
        error: false,
      };
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { setListCard } = cardSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCard = (state: RootState) => state.card;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default cardSlice.reducer;
