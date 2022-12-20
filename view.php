
<?php

header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");


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
$tsql="SELECT * FROM HBETOLDDATA ";
$stmt= sqlsrv_query($conn, $tsql);

if($tsql==false)
{
    echo "error"; 
}
$rows = array();
    while($r = sqlsrv_fetch_array($stmt,SQLSRV_FETCH_ASSOC)) {
        $rows[] = $r;
    }
    print json_encode($rows,); //convert php data to json data
