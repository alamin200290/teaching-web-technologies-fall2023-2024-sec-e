<?php 
    //sleep(3);
    $std =  $_POST['student'];
    //$student = json_decode($std);

    $student = ['username'=> 'alamin', 'password'=> '1234', 'email'=>'alamin@aiub.edu'];
    echo json_encode($student);

?>