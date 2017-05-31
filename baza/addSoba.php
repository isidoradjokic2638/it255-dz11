<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");
if(isset($_POST['ime']) && isset($_POST['velicina'])&& isset($_POST['cena']))
{
$ime = $_POST['ime'];
$velicina = $_POST['velicina'];
$cena = $_POST['cena'];

$stmt = $conn->prepare("INSERT INTO soba (ime, velicina, cena) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $ime, $velicina, $cena);
$stmt->execute();
echo "ok";
}
?>