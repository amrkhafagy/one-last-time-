function registration() {
    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    var address = document.getElementById("address").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2= document.getElementById("pass2").value;
 //email id
 var pass1_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(name=='')
    {
        alert('Please enter your name');
    }
    else if(!letters.test(name))
    {
        alert('Name field required only alphabet characters');
    }

    else if(email=='')
    {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        alert('Invalid email');
    }
    if(male=='')
    {
        alert('Please enter your Gender');
    }
    else if(!letters.test(male))
    {
        alert('Invalid input');
    }
    if(female=='')
    {
        alert('Please enter your Gender');
    }
    else if(!letters.test(female))
    {
        alert('Invalid input');
    }


    else if(phone=='')
    {
        alert('Please enter the user phon .');
    }
    else if(!letters.test(phone))
    {
        alert('Invalid phone');
    }
    else if(pass1=='')
    {
        alert('Please enter Password');
    }
    else if(pass2=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pass1_expression.test(pwd))
    {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(pass1 != pass2)
    {
        alert ('Password not Matched');
    }
    else if(document.getElementById("pass1").value.length < 6)
        {
            alert ('Password minimum length is 6');
    }
    else if(document.getElementById("pass1").value.length > 12)
        {
            alert ('Password max length is 12');
    }
    
    else
        {                                           
               alert('Thank You for Registration & You are Redirecting to Website');
               
        }
 }
