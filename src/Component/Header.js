import React, { Component } from 'react';
import Login from './Login';

  
class Header extends Component {

  constructor(props){
    super(props);
      this.state ={
        username:'Hi!'       
      }     
  }

  user = (val) => {
    this.setState({username : val});
  }

  render() {     
    return (
      <div className="main thememain-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light thememain-header">
            <a className="logoColor navbar-brand title" href="/Home" title="Eripsa" >Eripsa</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">                            
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>              
              <h3>{this.state.username}</h3><span className="ml-3"/>
              <Login user={this.user}/>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
