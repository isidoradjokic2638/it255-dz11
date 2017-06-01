<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");

	 if(isset($_POST['username']) && isset($_POST['password'])) {
     $result = $conn->prepare("SELECT * FROM korisnik WHERE username=? AND password=?");
     $result->bind_param("ss",($_POST['username']),md5($_POST['password']));
     $result->execute();
     $result->store_result();
     $num_rows = $result->num_rows;
     if($num_rows > 0)
     {
         echo "ok";
     }
     else{   
         echo "false";
     }
}
?>