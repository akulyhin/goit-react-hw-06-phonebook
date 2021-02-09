import { ADDTASK, REMOVETASKS, SETFILTER } from "../constants/todoConstants"
import {v4 as uuiv4} from 'uuid';

const addTask = (task) => {
    return {
        type: ADDTASK,
        payload: {...task, id: uuiv4()}
    }
}

const removeTask = (id) => {
    return {
        type: REMOVETASKS,
        payload: id
    }
}

const setFilter = (value) => {
    return {
        type: SETFILTER,
        payload: value
    }
}

export {addTask, removeTask, setFilter}