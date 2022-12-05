/* global firstName, lastName, email */
import React from 'react';


import './style.css'
import { render } from '@testing-library/react';

class Login extends React.Component
{
    

    constructor(props)
  {
    super(props);
    this.state={}
  }
  
test()
{
    this.props.OnClick=()=>{}
}


    
 render()
 {

 
    return(
            
            <form style={{ color: '#fffafa' }}>
    
            
    <h1  style={{ color: '#faea8a', fontSize: 25,fontFamily: 'TimesNewRomanPS-BoldItalicMT' }} >
                <b>HARBANS BHALLA EDUCATIONAL TRUST </b><br/> </h1>
                <i><p  style={{ color: '#E1F00B', fontSize: 20,fontFamily: 'Perpetua' }}> Change a Life.  Alter destiny</p></i>
       
    
    <div className="uname">
                  <label  className="form__label" for="LastName"> Enter Username </label><br></br>
                  <input className="form__input"  autocomplete="off" type="text" id="Uname"  required />
    
    </div>
    
    
    
          
       
    
  
              
              <div className="Pass">
              <label className="form__label" for="lastName">Enter Password </label><br></br>
                  <input  type="text"  autocomplete="off" name="" id="pass"  className="form__input"  required />
              
            </div> 
              
              
              
              
         
           
       <div class="footer">
              <button onClick={this.test} >LOGIN</button> 

              
 
          </div>
          
      </form>
      
    )       
}

}
        



export default Login;