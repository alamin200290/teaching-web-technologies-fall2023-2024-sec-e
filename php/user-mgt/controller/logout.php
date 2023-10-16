<?php
    session_start();
    //session_destroy();
    //unlink($_SESSION['abc']);
    unset($_SESSION['abc']);
    //print_r($_SESSION['flag']);
    //session_unset('flag');
    header('location: ../view/login.php');
?>