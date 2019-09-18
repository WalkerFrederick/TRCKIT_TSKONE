import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from '../types.js'

export function addEmployee(payload) {
    return { type: ADD_EMPLOYEE, payload }
};

export function editEmployee(payload) {
    return { type: EDIT_EMPLOYEE, payload }
};