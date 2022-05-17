function validate()
{
    var temp = 0;
    //validation for fname and lname
    let fname=document.getElementById("fname").value;
    if(fname=="")
    {
        document.getElementById("first_n").innerHTML="Invalid Fname";
    } 
    else{
        document.getElementById("first_n").innerHTML="";
        temp++;
    }

    //validation for lname
    let lname=document.getElementById("lname").value;
    if(lname=="")
    {
        document.getElementById("last_n").innerHTML="Invalid Lname";    
    }
    else{
        document.getElementById("last_n").innerHTML="";
        temp++;
    }

    //email validation
    let eml=document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!eml.match(validRegex))
    {
        document.getElementById("eml").innerHTML="Email is not valid";
    }
    else{
        document.getElementById("eml").innerHTML="";
        temp++;
    }

    //mobile validation
    let phn=document.getElementById("phn").value;
    var phoneno = /^\d{10}$/;
    if(!phn.match(phoneno))
    {
        document.getElementById("phnn").innerHTML="Invalid Phone no."
    }
    else{
        document.getElementById("phnn").innerHTML="";
        temp++;
    }

    if (temp == 4) {
        getdata();
    }
    else {
        
    }
    
}
function getdata()
 {
    console.log(localStorage.getItem("employees"));

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phn").value;
    let userRecords = [];
    userRecords = JSON.parse(localStorage.getItem("employees")) ? JSON.parse(localStorage.getItem("employees")) : [];
    userRecords.unshift({
        'firstName': fname.trim(),
        'lastName': lname.trim(),
        'email': email,
        'phoneNumber': phone
    });
    userRecords = localStorage.setItem("employees", JSON.stringify(userRecords));
    window.location.href = 'table.html';
}
