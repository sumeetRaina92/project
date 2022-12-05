/* global firstName, lastName, email */

import React, {useState} from 'react';
import axios from 'axios';

import './style.css'
export default RegistrationForm;

function RegistrationForm() {
    
    
const [SFName,setSFName]=useState('');
const [SLName,setSLName]=useState('');
const [Sdob,setSdob]=useState('');
const [Fname,setFname]=useState('');
const [Mname,setMname]=useState('');
const [address,setaddress]=useState('');
const [village,setvillage]=useState('');
const [pc,setpc]=useState('');
const [contact,setcontact]=useState('');
const [pin,setpin]=useState('');

const handlesubmit = () =>

    {
if (SFName.length==0)
{
    alert("Student  First Name has Left Blank")
}
else if(SLName.length==0)
{
    alert("Student Last Name has Left Blank")
}

else if(Sdob.length==0)
{
    alert("Student Dob has Left Blank")
}
else if(Fname.length==0)
{
    alert("Student Father Name has Left Blank")
}

else if(Mname.length==0)
{
    alert("Student Last Name has Left Blank")
}
else if(address.length==0)
{
    alert("address has Left Blank")
}
    
    else if(village.length==0)
    {
        alert("village has Left Blank")
    }
    else if(pc.length==0)
    {
        alert("Aadhar has Left Blank")

    }
    else if(contact.length==0)
    {
        alert("contact has Left Blank")
    }

    else if(pin.length==0)
    {
        alert("Pincode has Left Blank")
    }


    else{
        const url= "http://localhost/PhpProject2/index.php";
        let fdata = new FormData();
        fdata.append('SFName',SFName);
        fdata.append('SLName',SLName);
        fdata.append('Sdob',Sdob);
        fdata.append('Fname',Fname);
        fdata.append('Mname',Mname);
        fdata.append('address',address);
        fdata.append('village',village);
        fdata.append('pc',pc);
        fdata.append('contact',contact);
        fdata.append('pin',pin);


           axios.post(url,fdata)
           .then(Response=>alert(Response.data))
           .catch(error=>alert(error));



    }


}
    return(
            
            <form>
    
             <div  className="2ND">
                <h2 style={{ color: '#fffafa' }}>New Student Registration Form</h2>
            </div>
      <div className="form">
          <div className="form-body">
          
                
              <div className="first">
              <label className="form__label" for="firstName"> STUDENT FIRST NAME </label>
                  <input className="form__input"  autocomplete="off" type="text" id="SFName"  required value={SFName} onChange={(e) => setSFName(e.target.value)}/>
                  
    </div> 
    
       
    
    <div className="last">
                  <label  className="form__label" for="LastName"> STUDENT LAST NAME </label>
                  <input className="form__input"  autocomplete="off" type="text" id="SLName"  required value={SLName} onChange={(e) => setSLName(e.target.value)}/>
    
    </div>
    
    
    <div className="dob">
                  <label  className="form__label" for="LastName"> STUDENT DOB<br></br>[DD-MMM-YYYY] </label>
                  <input className="form__input"  autocomplete="off" type="date" id="Sdob"  required value={Sdob} onChange={(e) => setSdob(e.target.value)}/>
    
    </div>
          
       
    
  
              
              <div className="FName">
              <label className="form__label" for="lastName">FATHER NAME </label>
                  <input  type="text"  autocomplete="off" name="" id="Fname"  className="form__input"  required value={Fname} onChange={(e) => setFname(e.target.value)}/>
              
            </div> 
              
              <div className="MName">
              <label className="form__label" for="lastName">MOTHER NAME </label>
                  <input className="form__input" type="text"  autocomplete="off" name="" id="Mname"   required  value={Mname} onChange={(e) => setMname(e.target.value)}/>
              
            </div> 
              
              
               
           
              <div className="address">
                  <label className="form__label" for="address">ADDRESS</label>
                  <input className="form__input" type="text"  autocomplete="off" id="address"  required value={address} onChange={(e) => setaddress(e.target.value)}/>
              </div>
              <div className="village">
                  <label className="form__label" for="VILLAGE">VILLAGE/CITY</label>
                  <input className="form__input" type="text"  autocomplete="off" id="village"  required value={village} onChange={(e) => setvillage(e.target.value)}/>
              </div>
              <div className="Ano">
                  <label className="form__label" for="address">AADHAR NO </label>
                  <input className="form__input" type="number"  autocomplete="off" id="pc" required  value={pc} onChange={(e) => setpc(e.target.value)}/>
              </div>
              
              <div className="contact">
                  <label className="form__label" for="amount">MOBILE </label>
                  <input className="form__input" type="number"  autocomplete="off" id="contact"  required value={contact} onChange={(e) => setcontact(e.target.value)}/>
              </div>
              
              <div className="pin">
                  <label className="form__label" for="amount">PINCODE </label>
                  <input className="form__input" type="number"  autocomplete="off" id="Pin"   required  value={pin} onChange={(e) => setpin(e.target.value)}/>
              </div>
              
          </div>
       
      </div> 
       <div class="footer">
              <button onClick={handlesubmit}>submit</button> 

              
 
          </div>
          
      </form>
      
    )       
}
        



