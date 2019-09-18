import React from 'react';
import List from '@material-ui/core/List';
import EmployeeItem from './EmployeeItem';
import { connect } from "react-redux";


import '../App.css';

const mapStateToProps = state => {
    return { employees: state.employees };
  };

function EmployeeTab({employees}) {

  return (
    <div className="EmployeeTab">
      <List>
          {employees.map(person => 
          <EmployeeItem 
            index={person.index}
            name={person.name}
            salary={person.salary}
            role={person.role}
            receptionHours={person.receptionHours}
            workplaceNumber={person.workplaceNumber}
            lunchtime={person.lunchtime}
          />)

          }
      </List>
    </div>
  );
}
  

export default connect(mapStateToProps)(EmployeeTab);;
