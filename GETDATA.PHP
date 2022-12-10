


<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$userName = "";
$password = "";
$alertMsg = "";

$uidCharAllowed = array (".", "-", "_");
$passCharAllowed = array (".", "-", "_", "!", "@", "#", "$");



if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
//To Receive JSON request in php
$cardData = json_decode(file_get_contents('php://input'), true);

 //$cardNum = $cardData["cardNumber"];
$data = [];
//$operation = $cardData["operation"];
 // $data["result"] = TRUE;
  
echo json_encode($data);
}


$servername = "LAPTOP-K88UA0L7\SQLEXPRESS";
$database = "HBET";
$uid = "";
$pass = "";


// Create connection
$connection=
[
    "Database"=>$database,
    "Uid"=>$uid,
    "PWD"=>$pass,
    
    
    
];
$conn= sqlsrv_connect($servername,$connection);
if(!$conn)
{
            die(print_r(sqlsrv_errors(),true)); 
}
     /*  else {
            echo 'connection established';            
}*/


  

           
    /*       //Insert query
       $isql ="INSERT INTO StudentDetails(FIRSTNAME,LASTNAME,DOB,FATHERNAME,MOTHERNAME,VILLAGE,AADHAR,MOBILE,PINCODE)
VALUES ('Sanjay', 'Kumar',2009, 'Akaskas Sharma', 'Vena Devi', 'Jammu', '93456789012','54798586473','282111')";
       

$iresult= sqlsrv_query($conn,$isql);
if ($iresult) {
  echo "New record created successfully";
} else {
  echo "Error: " ;
}
*/



$tsql="select STUDENTID from StudentregHBET ORDER BY ID DESC";
$stmt= sqlsrv_query($conn, $tsql);

if($tsql==false)
{
    echo "error"; 
}
if($obj= sqlsrv_fetch_array($stmt,SQLSRV_FETCH_ASSOC))

{
     $result= $obj["STUDENTID"] ;
}

$result++;

print json_encode($result);

?>