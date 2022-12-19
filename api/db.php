<?php
$username = "synd_syndomds";
$servername = "localhost";
$password = "gaudi";
$db_name = "synd_syndomds";

// Create connection
$db = new mysqli($servername, $username, $password, $db_name);

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>
