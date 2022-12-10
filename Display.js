import React from 'react';
import './style.css'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Axios for get request
import axios from 'axios';



class Display extends React.Component {
 //initialize an object's state in a class
  constructor(props) {
    super(props)
      this.state = {
        data: []
              }
      }
      //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
      componentDidMount(){
        //get request
        axios.get('http://localhost/BackEndData/GETDATA.php').then(res => 
        {
        
        this.setState({data:res.data});
           }); 
        
        }
    
 
  render() {
   
    return (
     
      <div className="maincontainer">
       
        
        <div>
        
        <table style={{ color: '#faea8a', width:"100px" ,border: "1px solid black" }}>
          <thead>
            <tr>
              <th>STUDENTID</th>
              
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
             
                 <tr>
                  <td style={{ color: '#faea8a', width:"100px" ,border: "1px solid black" }}>{result.STUDENTID}</td>
                  
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>

       
            
      </div>

     
      </div>
     
)
};
}

export default Display;