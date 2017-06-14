<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');  
	if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     die();
}
	include("config.php");
	global $conn;
	if(isset($_POST['id']) && isset($_POST['ime']) && isset($_POST['velicina']) && isset($_POST['cena'])){ 
		$id = $_POST['id'];
		$ime = $_POST['ime'];
		$velicina = $_POST['velicina'];
		$cena = $_POST['cena'];

    $rarray = array();
        $stmt = $conn->prepare("UPDATE soba SET ime=?, velicina=?, cena=? WHERE id = ?");
        $stmt->bind_param("sssi", $ime, $velicina, $cena, $id);
        if($stmt->execute()){
            $rarray['success'] = "ok";
        }else{
            $rarray['error'] = "Connection error";
        }
    return json_encode($rarray);
}
	
?>