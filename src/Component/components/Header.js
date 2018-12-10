import React, { Component } from 'react';
import  '../styles/design.css';
import {Button} from 'react-bootstrap';
import MyLargeModal from './Login';

class Header extends Component {

    constructor(props) {
        super(props);        
        this.state = { login: false,
            user: 'Hi !',
            smShow: false,
            lgShow: false };        
      }    

      user = (val) => {
            if(val !== ''){
            this.setState({user : 'Hi ' + val,login : true});
            }else{
                this.setState({user : 'Hi !',login : false});
            }            
      }

    render() {
        let lgClose = () => this.setState({ lgShow: false });
      return (
        <div className="text-left header">                
        <label className="text-left"><h1 className="text-left title">Eripsa!</h1></label>    
       
        <div className="cartdata">        
        <label className= "userName"><h3>{this.state.user}</h3></label>
        <Button className ="login"  onClick={ () => this.state.login ? this.setState({login : false,user : 'Hi !'}) : this.setState({ lgShow: true })}>{this.state.login ? 'Logout' : 'Login'} </Button>
        <MyLargeModal show={this.state.lgShow} onHide={lgClose} user={this.user}/>
        <img className="cart" alt="cart" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOqSURBVGhD7ZpLSBVRHMatyLKHqUS2qYUtQshVixYmEUnZi0tBQbUKamULSSqoECTCogeV4aqVrWoREdjLSLI3iIEJLSooiB6LahGl5qN+//G7UuoVuzNnvAf64OPMfGfm+87/zsx1zrlm/UemYWBgIAE//RoD9H+DrXCbTss8MLgPGu+4wPH1OjWzwMDeaow2yBeS/wJdc+nbBbt1XIW6MgeMq9wKgJ2wTPKooP+ACmmS5CeoIZ8iumAfLJDsJyjgpq5KQpKfoICDKuSMJD9BAaUq5JkkP0EN2RTxHfaznS/ZT1BEs66K98/JYRVyWpKfoIblKqRdkp+ggGnwB+yHJdRUFDfJXaDhhANGdzGcUDCG/RpO+sCkRmb2Zvw6ZvYou1rDSR+YrJBZrM8JeQWwG/bCQsnpgxqmY2TvXfb3JE+yc5BXqQ/wmqTwwKxFphslOQdxbcrcJCk8MKuV6UlJTkGOfUNans1osyWHB4YrzRi0SXIK8k5ZmLWSogGGOdAevD7850h2AvynkhOsLdCWSI4OmLbKfL0kJ8A/YTnAzdUn4Ii5056Q5AT4X1VOpaRogfEqBTyVFDnwngd/QruN3UyxqWEG5j3Q5vG5kiMFvnv1YV2S5AYEPFDQWkmRAt8Ol/5DIOCoBYFjkiIDnkvNmIx3NFMkuwEhqxX2WFJkwPO8vOskuQMhM6E9jL1kzpIcGvjZvOezClks2S0IeqTANZJCA6+t8nwoyT0Iq1NoZLcAXtfluVuSexBWodB2mvKwxMd+7rCvdFt6cvK1PioImw3tGYkUeF5URHwg9InCO2BzBLwCF8k+PhB6XIXUSPITFLBOhbRI8hMUkAvtAbW5fI5kP0EB93VVNkjyExSQfFO1hYlJkv0Dg8+jiOCXYlr75tnD5pZ0yfmbaZ1Oo1OC8GXwPQOIBHg1yDp+EL5Pg7BZ3Q3YGYwKsG3z/MvDif6V1vptGbYJvtT+G5rIXkbHDUInE/4F2mp96R9aowY2Yn6PVghtGdReSYpN41BbObmtc8Kv8/4ryLWlfwt/JSkA+8l5yy1JQ0ArU989SQHY3ym9UVJ8INd+j7er0cX2fMk2qEOpBoVWrL6PNEO3EfsN0t1PrEaDDVYDsP+qqIbnoE2+7A9mcLsNB/odOwe0sV0FL0D7QOxHpXgmVsNBsC3/B4sSSbBvhVTpkBHgkIX0Px88ehDs2zOzQ4dMDBiHPeDb4VlYC5eoKyU4xqa39g889dBuxSJ1jYGsrN9riTg+Yn9cjgAAAABJRU5ErkJggg=="></img>                                 
        <label className="cartvalue">0</label>
        </div>        
      </div>
        );
    }
  }
  
  export default Header;