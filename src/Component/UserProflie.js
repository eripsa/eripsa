import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import {Redirect} from 'react-router-dom';

const user_profile = [  
    {  
       "id":"1",
       "name":"customer1",
       "address":"1/D-1,Sipcot IT Park, First Main Road , 044 6740 4000",
       "pincode":"603130",
       "landmark":"SIPcot IT Park",
       "mobile":"90436912345",
       "user_name":"customer@gmail.com",
       "status":"1",
       "create_date":""
    }
 ];

class Profile extends Component {

    constructor(props){
        super(props); 
          this.state ={
            UserDetail: user_profile[0]            
          }
        }

           

     UserDetail(Id){

       fetch('http://172.24.133.230/eripsa-demo/jsondata/user_profile.php?customer_id='+ Id)
     .then(response => {
         return response.json();
     }).then(data => {
     this.setState({
        UserDetail: data.user_profile[0]
     });    
    });
}

    componentDidMount(){
        var value = localStorage.getItem("user");              
        if(!((value === '')||(value === null))){
            this.UserDetail(value);
        }     
     }

    render() {
        if(!localStorage.getItem("user")){
            return(<Redirect to={'/Home'}/>)           
          }  
      return (
        <div className="container">   
        <br/>       
        <img src={require('../Images/user.jpg')} className="center" alt="login" />
        <br/>  
        <Form >
        <FormGroup row>
          <Label for="name" className="text-right" sm={2}>User Name</Label>
          <Col sm={4}>
            <Input type="name" name="name" id="name" disabled={true} value={this.state.UserDetail.name} placeholder="User Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Address" className="text-right" sm={2}>Address</Label>
          <Col sm={4}>
            <Input type="textarea" name="Address" disabled={true} value={this.state.UserDetail.address} id="Address" placeholder="Address"/>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="Pincode" className="text-right" sm={2}>Pincode</Label>
          <Col sm={4}>
            <Input type="Pincode" name="Pincode" id="Pincode" value={this.state.UserDetail.pincode} placeholder="Pincode" disabled={true} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Landmark" className="text-right" sm={2}>Landmark</Label>
          <Col sm={4}>
            <Input type="textarea" name="Landmark" value={this.state.UserDetail.landmark} disabled={true} id="Landmark" placeholder="Landmark"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Contact" className="text-right" sm={2}>Contact</Label>
          <Col sm={4}>
            <Input type="textarea" name="Contact" value={this.state.UserDetail.mobile} disabled={true} id="Contact" placeholder="mobile"/>
          </Col>
        </FormGroup>        
        <FormGroup row>
        <Label for="exampleEmail" className="text-right" sm={2}>Email</Label>
          <Col sm={4}>
            <Input type="email" name="email" value={this.state.UserDetail.user_name} id="Email" disabled={true} placeholder="Email" />
          </Col>
        </FormGroup>       
      </Form>
        </div>
      );
    }
  }
  
  export default Profile;