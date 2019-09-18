import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel';import { Button, StepLabel } from '@material-ui/core';
import { editEmployee, addEmployee } from '../actions'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginBottom: theme.spacing(1),
    width: '100%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  buttonSpacer: {
      flexGrow: 1,
  },
}));




function EmployeeForm(props) {
    const classes = useStyles();
    const [value, setValues] = React.useState({
        index: props.new === true ? props.count : props.index,
        name: props.name,
        salary: props.salary,
        role: props.role,
        lunchtime: props.lunchtime,
        workplaceNumber: props.workplaceNumber,
        receptionHours: props.receptionHours,
      });

      const handleChange = name => event => {
            setValues({ ...value,[name]: event.target.value })

      };
      const handleRadio = name => event => {
        if (event.target.value === 'employee') {
            setValues({ ...value, [name]: event.target.value, receptionHours: null  })
        }
        else if (event.target.value === 'management') {
            setValues({ ...value,[name]: event.target.value, workplaceNumber: null, lunchtime: null  })

        }
      };

      const handleSave = (event) => {
        event.preventDefault();

        if (props.new === true) {
            props.addEmployee(value)
        }
        else {
            props.editEmployee(value)
        }
      }
      

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSave}>
      <div className={classes.buttonSpacer}/>
      <Button MuiButton="sizeSmall" className={classes.saveButton} type="submit">Save</Button>
      <TextField
        required
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={value.name}
        onChange={handleChange('name')}
        margin="normal"
      />
      <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Role</FormLabel>
          <RadioGroup name="role" value={value.role} onChange={handleRadio('role')}>
            <FormControlLabel value="employee" control={<Radio />} label="Employee" />
            <FormControlLabel value="management" control={<Radio />} label="Management" />
          </RadioGroup>
        </FormControl>
      <TextField
        required
        label="Salary"
        className={classes.textField}
        value={value.salary}
        onChange={handleChange('salary')}
        margin="normal"
      />
      {value.role === 'employee' 
      ? 
      <>
      <TextField
      required
      label="Lunch"
      className={classes.textField}
      value={value.lunchtime}
      onChange={handleChange('lunchtime')}
      margin="normal"
      />
      <TextField
      required
      label="Workplace Number"
      className={classes.textField}
      value={value.workplaceNumber}
      onChange={handleChange('workplaceNumber')}
      margin="normal"
      />
      </>
      :
      <TextField
        required
        label="Reception Hours"
        className={classes.textField}
        value={value.receptionHours}
        onChange={handleChange('receptionHours')}
        margin="normal"
      />}
    </form>
  );
}

function mapDispatchToProps(dispatch) {
    return {
      editEmployee: Employee => dispatch(editEmployee(Employee)),
      addEmployee: Employee => dispatch(addEmployee(Employee)),
    };
}
const mapStateToProps = state => {
  return {count: state.count}
};
  

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm)
