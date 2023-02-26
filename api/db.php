<?php
$username = "c40843admin";
$servername = "mysql.rackhost.hu";
$password = "zoomdesign";
$db_name = "c40843zoomdesign";

try {
    // Create connection
    $db = new mysqli($servername, $username, $password, $db_name);

// Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }
} catch (Exception $e) {
    echo "errr";
}
?>
