import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from "../types";

const initialState = {
    employees: [{
      index: 0,
      name: "Jane Doe",
      salary: "$70,000",
      role: "employee",
      receptionHours: null,
      workplaceNumber: "404-222-2222",
      lunchtime: "12:00pm"
    },
    {
      index: 1,
      name: "Jake Doe",
      salary: "$70,000",
      role: "management",
      receptionHours: "1:00pm - 3:00pm",
      workplaceNumber: null,
      lunchtime: null
    }]
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