import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ADDTASK, REMOVETASKS, SETFILTER } from "../constants/todoConstants";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactsReducer = createReducer([...initialState], {
  [ADDTASK]: (state, action) => [...state, action.payload],
  [REMOVETASKS]: (state, action) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
});

const filterReducer = createReducer("", {
  [SETFILTER]: (state, action) => action.payload,
});

const reducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

export default reducer;
