import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from '../types.js'

let currentIndex = -1;

export function addEmployee(payload) {
    return { type: ADD_EMPLOYEE, index: currentIndex++, payload }
};

export function editEmployee(payload) {
    return { type: EDIT_EMPLOYEE, payload }
};