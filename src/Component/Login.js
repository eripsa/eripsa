import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import '../styles/design.css';


class MyLargeModal extends Component {


    constructor(props){
        super(props); 
          this.state ={
            username:'',
            password:'', 
            redirect : false,
            error: false  
          }
          this.login = this.login.bind(this);
          this.onChange = this.onChange.bind(this);   
          this.validateForm = this.validateForm.bind(this); 
          this.handleKeyPress = this.handleKeyPress.bind(this);
      } 


      handleKeyPress(target) {
        if(target.charCode === 13){
               this.login();  
        }
    
    }
    
      login(){
        
        if(this.state.username === "admin" && this.state.password === "admin"){
            this.props.user(this.state.username);
            this.props.onHide();
        }
        else{
            this.setState({
                username : '',
                password : '',
                error : true
            });
        }
        
      }
    
      onChange(e){
        this.setState({[e.target.name]: e.target.value}); 
        this.setState({error:false});   
      }
    
      validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
      }


    render() {
      return (          
        <Modal
          {...this.props}
        //   bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        //  
          
        >                   
          <Modal.Body>
                <label className="text-center"><h1 className="text-center title">Eripsa!</h1></label>    
                 <form >                 
                 <img src={require('../Images/user.jpg')} className="center" alt="login" />                       
                 <div>
                 {this.state.error && <div className="ErrorMessage">Username or password worng!!!</div>}
                 <div className="input-group input">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input type="text" className="form-control" name="username" id="username" placeholder="Username" value={this.state.username} onKeyPress={this.handleKeyPress}  onChange={this.onChange}/>
                  </div>                            
                 </div>
                 <br/>                
                 
                 <div className="input-group input">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input type="Password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.password} onKeyPress={this.handleKeyPress} onChange={this.onChange}/>
                  </div> 
                
                 <br/>  
                 <input type="button" className="btn btn-secondary btn-block input" value="Login" id="button"  onClick={this.login}/>   
             </form> 


          </Modal.Body>          
        </Modal>        
      );
    }
  }
  
  export default MyLargeModal;