import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createUser ,loginUser} from '../apicall';
import { connect } from 'react-redux';
import { ActionCreators }from '../actions/actionCreators';
import { Redirect } from 'react-router';



class UserDetails extends React.Component {
  constructor(props){
    super(props);
    }


    render() {
      return (
        <h1>
           Hi {this.props.users[this.props.users.loggeduser].fullname}, your mobile no is {this.props.users[this.props.users.loggeduser].mobileno} and email is {this.props.users[this.props.users.loggeduser].email} 
        </h1>
    
    
      );
    }
  }

const mapStateToProps = (state) => {
  return {
      users: state
  }
}
  
export default connect(mapStateToProps)(UserDetails)
