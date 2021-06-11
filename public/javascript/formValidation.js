function registration() {
    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var phone= document.getElementById("phone").value;
    var address= document.getElementById("address").value;
    var pass1 = document.getElementById("pass1").value;
    var pass1= document.getElementById("pass1").value;
 //email id
 var pass1_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(name=='')
        {
            alert('Please enter your name');
        }



 }
