<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");


	if ( isset($_POST['username']) && isset($_POST['password']) && isset($_POST['name']) && isset($_POST['last']) && isset($_POST['email']) ) {
		$username = $_POST['username'];
		$password = md5($_POST['password']);
		$name = $_POST['name'];
		$last = $_POST['last'];
		$email = $_POST['email'];
		$stmt = $conn->prepare("INSERT INTO korisnik (username, password,name,last,email) VALUES (?,?,?,?,?)");
		$stmt->bind_param("sssss", $username,$password,$name,$last,$email);
		$stmt->execute();
		echo "ok";
	}
?>