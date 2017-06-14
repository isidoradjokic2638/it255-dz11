<?php
	include 'config.php';
	function getHotel(){
		global $conn;
	  $sobaSql = "SELECT * FROM hotel";
	  if($stmt = $conn->prepare($sobaSql)) 
	  {
	    $stmt->execute();
	    if(!$stmt->execute()) 
	    { 
	            echo $stmt->error;
	    }
	    else {
	        $parameters = array();
	        $result = $stmt->get_result();
	        while ($row = $result->fetch_assoc()) {
	          array_push($parameters,$row);
	        }
	        $stmt->close(); 
	        return $parameters;
	    }
	    $stmt->close();
	  }
	}
	$rez = getHotels();
	echo json_encode($rez)
?>