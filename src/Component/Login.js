import React from 'react';
import { Button, Modal,  ModalBody } from 'reactstrap';

class Login extends React.Component {
  constructor(props){
    super(props); 
      this.state ={
        username:'',
        password:'', 
        user : 'Hi !',
        login : false,
        model : false,        
        error: false  
      }
      this.login = this.login.bind(this);
      this.onChange = this.onChange.bind(this);   
      this.validateForm = this.validateForm.bind(this); 
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.toggle = this.toggle.bind(this);    
  } 

  user = (val) => {
    if(val !== ''){
    this.setState({user : 'Hi ' + val,login : true});
    }else{
        this.setState({user : 'Hi !',login : false});
    }            
}

  handleKeyPress(target) {
    if(target.charCode === 13){
           this.login();  
    }

}

  login(){    
    if(this.state.username === "admin" && this.state.password === "admin"){
        this.user(this.state.username);  
        this.setState({login : true});  
        this.toggle(); 
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

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <label className= "userName"><h3>{this.state.user}</h3></label>        
        <Button  onClick={ () => this.state.login ? this.setState({login : false, user : 'Hi !'}) : this.toggle()}>{this.state.login ? 'Logout' : 'Login'} </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >        
          <ModalBody>
          <label className="text-center"><h1 className="text-center title">Eripsa</h1></label>    
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
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default Login;