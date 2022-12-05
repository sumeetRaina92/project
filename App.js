import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'


import { render } from '@testing-library/react';
import Login from './components/formfill';



class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={RegistrationForm:false}
  }

show()
{
  this.setState({RegistrationForm:true})
}
render() {
  
  
  return (
    <div className="App">
    
      <Header/>
      <div  style={{
      
          flexGrow: 4
        }}>
      
    </div>
     {this.state.RegistrationForm==false?<Login OnClick={this.show.bind(this)}/>:
       <RegistrationForm/>}
     {/* <RegistrationForm/>*/}
    </div>
  );
      
}
}

export default App;