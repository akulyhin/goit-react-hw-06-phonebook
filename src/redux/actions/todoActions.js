import { createAction } from "@reduxjs/toolkit";
import { ADDTASK, REMOVETASKS, SETFILTER } from "../constants/todoConstants";
import { v4 as uuiv4 } from "uuid";

const addTask = createAction(ADDTASK, (task) => ({
  payload: {
    ...task,
    id: uuiv4(),
  },
}));

const removeTask = createAction(REMOVETASKS);

const setFilter = createAction(SETFILTER);

export { addTask, removeTask, setFilter };
