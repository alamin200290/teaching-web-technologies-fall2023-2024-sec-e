<?php
    session_start();
    if(!isset($_SESSION['abc'])){
        header('location: ../view/login.php');
    }
?>