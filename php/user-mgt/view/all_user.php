<?php
    //include('../controller/sessionCheck.php');
    require_once('../controller/sessionCheck.php');
?>

<html lang="en">
<head>
    <title>List of users</title>
</head>
<body>
        
        <a href="home.php"> Back </a> |
        <a href="../controller/logout.php"> Logout </a> 

        <br>
        <br>

        <table border="1">
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>PASSWORD</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ABC</td>
                <td>ABC@aiub.edu</td>
                <td>1234</td>
            </tr>
            <tr>
                <td>1</td>
                <td>XYZ</td>
                <td>xyz@aiub.edu</td>
                <td>456</td>
            </tr>
        </table>

</body>
</html>