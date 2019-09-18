import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmployeeForm from './EmployeeForm.js'

import '../App.css';

class EmployeeItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ModalOpen: false,
            editOpen: false
        }
    }
  handleOpen = () => {
    this.setState({ModalOpen: true})
  };

  handleClose = () => {
    this.setState({ModalOpen: false, editOpen: false})
  };
  handleEditOpen = () => {
      this.setState({editOpen: true})
  }

    render() {
        return (
            <div className="EmployeeItem">
              <ListItem button onClick={event => this.handleOpen(event, 0)}>
                <h1>{this.props.name}</h1>
                <h2>{this.props.role}</h2>
              </ListItem>
              <Modal
                open={this.state.ModalOpen}
                onClose={this.handleClose}
              >
                <div className="EmployeeModal">
                    {!this.state.editOpen 
                    ?  
                    <div className="EmployeeDisplay">
                        <h2>{this.props.name}</h2>
                        <h4>Role: {this.props.role}</h4>
                        <h4>Salary: {this.props.salary}</h4>
                        {this.props.receptionHours ? <h4>Reception Hours: {this.props.receptionHours}</h4> : <></> }
                        {this.props.workplaceNumber ? <h4>Workplace Number: {this.props.workplaceNumber}</h4> : <></> }
                        {this.props.lunchtime ? <h4>Lunch Time: {this.props.lunchtime}</h4> : <></> }
                        <Button onClick={event => this.handleEditOpen(event, 0)}>Edit</Button>
                    </div> 
                    : 
                    <div className="EmployeeEdit">
                        <EmployeeForm 
                        index={this.props.index}
                        name={this.props.name}
                        salary={this.props.salary}
                        role={this.props.role}
                        receptionHours={this.props.receptionHours}
                        workplaceNumber={this.props.workplaceNumber}
                        lunchtime={this.props.lunchtime}> 
                        </EmployeeForm>
                    </div> }
                   
                    

                <p>
                </p>
                </div>
            </Modal>
            </div>
          );
    }
}

export default EmployeeItem;
