
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

// $cardNum = $cardData["cardNumber"];
$data = [];
$operation = $cardData["operation"];





    $data["result"] = TRUE;
  
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
} else {
  $SFName = $_POST['SFName'];
  $SLName = $_POST['SLName'];
  $Sdob = $_POST['Sdob'];
  $Fname = $_POST['Fname'];
  $Mname = $_POST['Mname'];
  $address = $_POST['address'];
  $city = $_POST['village'];
  $pc = $_POST['pc'];
  $contact = $_POST['contact'];
  $pin = $_POST['pin'];



  //Insert query
  $isql = "INSERT INTO StudentDetailHBET(PREFIX,FIRSTNAME,LASTNAME,DOB,FATHERNAME,MOTHERNAME,VILLAGE,CITY,AADHAR,MOBILE,PINCODE)
    VALUES ('H2','$SFName','$SLName','$Sdob','$Fname','$Mname','$address','$city','$pc','$contact','$pin')";


  $iresult = sqlsrv_query($conn, $isql);
  if ($iresult) {
    echo "New record created successfully";
  } else {
    echo "Error: ";
  }
}

  