<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");
if(isset($_POST['ime']) && isset($_POST['grad'])&& isset($_POST['drzava']))
{
$ime = $_POST['ime'];
$grad = $_POST['grad'];
$drzava = $_POST['drzava'];

$stmt = $conn->prepare("INSERT INTO hotel (ime, grad, drzava) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $ime, $grad, $drzava);
$stmt->execute();
echo "ok";
}
?>