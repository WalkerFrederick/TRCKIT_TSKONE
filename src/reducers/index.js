import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from "../types";

const initialState = {
    employees: []
  };

  function rootReducer(state = initialState, action) {
    if (action.type === ADD_EMPLOYEE) {
      action.payload.index = state.employees.length
      return Object.assign({}, state, {
        employees: state.employees.concat(action.payload)
      });
    }
    else if (action.type === EDIT_EMPLOYEE) {
      return { 
        ...state, 
        employees: state.employees.map(
            (employee, i) => i === action.payload.index ? action.payload
                                    : employee
        )
     }
    }
    return state;
  }

  export default rootReducer