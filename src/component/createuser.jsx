import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createUser ,loginUser} from '../apicall'



class CreateUser extends React.Component {
    state={
        fullname:'',
        mobileno:'',
        email:'',
        password:'',
        confirmpassword:'',
        loginemail:'',
        loginpassword:''
    }

    onButtonClick = () => {
        console.log("the state is")
         console.log(this.state)
         
         if (this.state.fullname == '') {
             alert("full name cannot be empty")
         }
         if (isNaN(this.state.mobileno)||this.state.mobileno.length!=10) {
            alert("invalid mobile number")
        }
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) {
            alert("invalid email id")
        }

        if (!/^[A-Za-z]\w{8,16}$/.test(this.state.password)) {
            alert("invalid password,try another")
        }
        if(this.state.confirmpassword!=this.state.password)
        {
            alert("passwords did not match")
        }
        
        this.callApi()
        
    }
    onLoginButtonClick = () => {
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.loginemail)) {
            alert("invalid email id")
        }
        if (!/^[A-Za-z]\w{8,16}$/.test(this.state.loginpassword)) {
            alert("invalid password")
        }
        this.callloginApi()
    }

    handleChange = (e) => {

        console.log(e.target.id)
        console.log(e.target.value)
        this.setState({ [e.target.id]: e.target.value });
      }


    callApi = () => {
        createUser(this.state)
        .then(response => {
            response.text().then(function (text) {
                alert(text);
              });
         
      });
        
        //return body;
      };
      callloginApi = () => {
        loginUser(this.state)
        .then(response => {
            response.text().then(function (text) {
                alert(text);
              });
         
      });
        
        //return body;
      };


    render() {
      return (
        <div>
      <TextField onChange={this.handleChange} id="fullname" label="fullname" variant="outlined" /><br></br>
      <TextField onChange={this.handleChange} id="email" label="email" variant="outlined" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/><br></br>
      
      <input  onChange={this.handleChange} type="number" id="mobileno"  title="mobile number should be 10 digits" pattern="[1-9]{1}[0-9]{9}"/> <br></br>
      <label for="pwd">Password:</label>
      <input onChange={this.handleChange} type="password" id="password" /> <br></br>
      <label for="confirmpass">Confirm Password:</label>
      <input onChange={this.handleChange} type="password" id="confirmpassword" /> <br></br>
      <Button variant="outlined" onClick={this.onButtonClick}>Register</Button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <TextField onChange={this.handleChange} id="loginemail" label="loginemail" variant="outlined" /><br></br>
    <label for="pwd">Password:</label>
      <input onChange={this.handleChange} type="password" id="loginpassword" /> 
      <Button variant="outlined" onClick={this.onLoginButtonClick}>Login</Button>
    </div>
    
    
      );
    }
  }

export default CreateUser;