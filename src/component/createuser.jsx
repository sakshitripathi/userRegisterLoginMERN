import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createUser ,loginUser} from '../apicall';
import { connect } from 'react-redux';
import { ActionCreators }from '../actions/actionCreators';
import { Redirect } from 'react-router';



class CreateUser extends React.Component {
  constructor(props){
    super(props);

    this.state={
         fullname:'',
         mobileno:'',
         email:'',
         redirect : null
      }
    }
        

    onButtonClick = () => {
        console.log("the state is")
         console.log(this.state)
         /*
         if (this.state.fullname == '') {
             alert("full name cannot be empty")
             return
         }
         if (isNaN(this.state.mobileno)||this.state.mobileno.length!=10) {
            alert("invalid mobile number")
            return
        }
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) {
            alert("invalid email id")
            return
        }

        if (!/^[A-Za-z]\w{8,16}$/.test(this.state.password)) {
            alert("invalid password,try another")
            return
        }
        if(this.state.confirmpassword!=this.state.password)
        {
            alert("passwords did not match")
            return
        }
        
        this.callApi()
        */
        this.props.dispatch(ActionCreators.addProfile({
            fullname:this.state.fullname,
            mobileno:this.state.mobileno,
            email:this.state.email
          }));   
    }
    onLoginButtonClick = () => {
      /*
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.loginemail)) {
            alert("invalid email id")
        }
        if (!/^[A-Za-z]\w{8,16}$/.test(this.state.loginpassword)) {
            alert("invalid password")
        }
        this.callloginApi()
        */
       this.props.dispatch(ActionCreators.login({
        email:this.state.email
      }));
      this.setState({ redirect: "/user-details" });
        
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
                this.props.dispatch(ActionCreators.login({
                  email:this.state.email
                }));
                this.setState({ redirect: "/user-details" });
              });
         
      });
        
        //return body;
      };


    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <div>
            <label for="fullname">Fullname:</label>
      <input type="text" onChange={this.handleChange} id="fullname" label="fullname" variant="outlined" /><br></br><br></br>
      <label for="email">Email:</label>
      <input type="text" onChange={this.handleChange} id="email" label="email" variant="outlined" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/><br></br><br></br>
      <label for="number">Mobile no.:</label>
      <input  onChange={this.handleChange} type="number" id="mobileno"  title="mobile number should be 10 digits" pattern="[1-9]{1}[0-9]{9}"/> <br></br><br></br>
      <label for="pwd">Password:</label>
      <input onChange={this.handleChange} type="password" id="password" /> <br></br><br></br>
      <label for="confirmpass">Confirm Password:</label>
      <input onChange={this.handleChange} type="password" id="confirmpassword" /> <br></br><br></br>
      <Button variant="outlined" onClick={this.onButtonClick}>Register</Button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <label for="email">Enter Email to login:</label>
    <input type="text" onChange={this.handleChange} id="loginemail" label="loginemail" variant="outlined" /><br></br><br></br>
    <label for="pwd">Password:</label>
      <input onChange={this.handleChange} type="password" id="loginpassword" /> <br></br>
      <Button variant="outlined" onClick={this.onLoginButtonClick}>Login</Button>
    </div>
    
    
      );
    }
  }

const mapStateToProps = (state) => {
  return {
  }
}
  
export default connect(mapStateToProps)(CreateUser)
