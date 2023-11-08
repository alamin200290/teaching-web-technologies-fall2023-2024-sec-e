
    //name = "alamin";
    //var name = "alamin";
    let name = "alamin";
    let std = [1, 'alamin', 'alamin@aiub.edu'];

    // function abc(){

    // }

    // let f1 = (a, b)=>{
    //     return a+b;
    // }

    // let f2 = (a, b)=>a+b;

    // if(){

    // }else{

    // }

    // for(let i=0; i<10; i++){
    //     console.log('test');
    // }
    
    //alert('test');
    //document.write('<h1>Testing JS Dom...</h1>');
    //document.getElementsByTagName('h1')[2].innerHTML = "JS Test";
    
    function test(){
        document.getElementById('h1').innerHTML = "JS example..";
    }

    function f1(){
        let username = document.getElementById('username').value;

        if(username == ''){
            //alert('empty username!');
            document.getElementById('h1').innerHTML = 'empty username!';
        }else{
            //alert('your username is : '+username);
            document.getElementById('h1').innerHTML = username;
        }
    }

    //test();