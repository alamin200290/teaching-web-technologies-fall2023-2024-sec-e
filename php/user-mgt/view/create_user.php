<html lang="en">
<head>
    <title>Create New</title>
</head>
<body>

        <a href="home.php"> Back </a> |
        <a href="../controller/logout.php"> Logout </a> 

        <form method="post" action="createCheck.php" enctype="">
            <fieldset>
                <legend>Create User</legend>
                Username: <input type="text" name="username" value="" /> <br>
                Password: <input type="password" name="password" value="" /> <br>
                Email: <input type="email" name="email" value="" /> <br>
                     <input type="submit" name="submit" value="Add" />
            </fieldset>
                
        </form>
</body>
</html>