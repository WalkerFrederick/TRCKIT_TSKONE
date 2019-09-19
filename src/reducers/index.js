import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from "../types";

const initialState = {
    employees: [],
    count: -1,
  };

  function rootReducer(state = initialState, action) {
    if (action.type === ADD_EMPLOYEE) {
      console.log(state.employees)
      //action.payload.index = state.employees.length
      return {...state, 
        employees: [...state.employees, action.payload]
      };
    }
    else if (action.type === EDIT_EMPLOYEE) {
      console.log(state)
      return { 
        ...state, 
        employees: state.employees.map(
            (employee, i) => {
              console.log(employee)
              return (employee.index === action.payload.index ? action.payload
                                    : employee)}
        )
     }
    }
    return state;
  }

  export default rootReducer