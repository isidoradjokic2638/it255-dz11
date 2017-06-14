<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET');  
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
 	include("config.php");
	if(isset($_GET['id'])){
		$id = $_GET['id'];
	       global $conn;
    $rarray = array();
        $room = array();
        $result2 = $conn->query("SELECT * FROM soba WHERE id = ".$id."");
        while($row = $result2->fetch_assoc()) {
            $room['id'] = $row['id'];
            $room['ime'] = $row['ime'];
            $room['velicina'] = $row['velicina'];
            $room['cena'] = $row['cena'];
        }
        $rarray['data'] = $room;
        echo json_encode($rarray);
    
}
 
?>