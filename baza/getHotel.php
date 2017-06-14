<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET');  
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
 	include("config.php");

	if(isset($_GET['id'])){
	    global $conn;
    $rarray = array();
        $hotel = array();
        $result2 = $conn->query("SELECT * FROM hotel WHERE id = ".$id);
        while($row = $result2->fetch_assoc()) {
            $hotel['id'] = $row['id'];
            $hotel['ime'] = $row['ime'];
            $hotel['grad'] = $row['grad'];
            $hotel['drzava'] = $row['drzava'];
        
        $rarray['data'] = $room;
        return json_encode($rarray);
   
	}
 
?>