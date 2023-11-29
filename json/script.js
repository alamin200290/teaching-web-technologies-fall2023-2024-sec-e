//name = 'alamin';
//var name = "alamin";
let name = "alamin";
//const name ="alamin";

let student = [1, 'alamin', '3.4'];
student[0];

// if(){

// }else{

// }

function abc(){

}

let f1 = (a, b)=>{
    return ;
}
f1();

//console.log('test');
//alert('test');
//document.write('This is JS test...');
//let obj = document.getElementsByTagName('h1')[0]
//document.getElementById('head').innerHTML = "test";
//obj.innerHTML = "Update!";

function test(){
    document.getElementById('head').innerHTML = "ABC";
}

function getName(){
    let name = document.getElementById('name').value;

    if(name == ""){
        document.getElementById('head').innerHTML = "null username";
    }else{
        document.getElementById('head').innerHTML = name;
    }
}

function move(){
    let current = document.getElementById('d1').style.left = '40px';
    if(current == ""){
        current = "10px";
    }else{
        alert(current);
    }

    document.getElementById('d1').style.left = current;
}


function ajax(){
    let username = document.getElementById('username').value;
    let std  = {
        'username': username,
        'email': 'alamin@aiub.edu',
        'password': '123' 
    }
    let data = JSON.stringify(std);
    let xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'abc.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('student='+data)
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            //alert(this.responseText);
            let std = JSON.parse(this.responseText);
            document.getElementById('head').innerHTML = std.username;
        }
    }
}