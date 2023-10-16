<?php
    session_start();
    if(!isset($_SESSION['flag'])){
        header('location: login.html');
    }

?>


<html lang="en">
<head>
    <title>Home</title>
</head>
<body>
        <h1>Welcome Home </h1>
        <a href="create_user.php"> Create New User </a> |
        <a href="all_user.php"> List All User </a> |
        <a href="../controller/logout.php"> Logout </a> 
</body>
</html>