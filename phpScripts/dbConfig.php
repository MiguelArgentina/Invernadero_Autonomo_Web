<?php
// Database configuration
$dbHost     = "localhost";
$dbUsername = "root";
$dbPassword = "InVeRnAdErO2020";
$dbName     = "u487371343_users";

// Create database connection
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>
