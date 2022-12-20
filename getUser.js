import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
export default function ListUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost/PhpProject2/view.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    return (
        <div>
            <h1>HBET OLD STUDENT LIST</h1>
            <Link to="/"><button  > Exit</button></Link>  
            
            <table>
                <thead>
                    <tr style={{ color: '#faea8a', fontSize: 25,fontFamily: 'TimesNewRomanPS-BoldItalicMT' }}>
                        
                        <th>S ID</th>
                        <th>NAME</th>
                        <th>PC</th>
                        <th>DOB</th>
                        <th>PARENTAGE</th>
                        <th>VILLAGE</th>
                        <th>SCHOOL NAME</th>
                        <th>MOBILE</th>
                        <th>CAT</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.SID}</td>
                            <td>{user.NAME}</td>
                            <td>{user.PC}</td>
                            <td>{user.DOB}</td>
                            <td>{user.PARENTAGE}</td>
                            <td>{user.VILLAGE}</td>
                            <td>{user.SCHOOL_NAME}</td>
                            <td>{user.CONTACT}</td>
                            <td>{user.CAT}</td>
                            <td>
                              {/*<Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link><br></br>*/}
                              <button>Edit</button><br></br>
                                
                                <Link to="/"><button  > Exit</button></Link>  
                    </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}