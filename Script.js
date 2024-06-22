function Check(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phno=document.getElementById("phno").value;
    var pass=document.getElementById("password").value;
    var cpass=document.getElementById("cpass").value;
    var username=document.getElementById("username").value;
    var Gender="";
    var gender=document.getElementsByName("gender");
    for(var i=0;i<gender.length;i++)
        {
            if(gender[i].checked)
                {
                    console.log(gender[i].value);
                    Gender=gender[i].value;
                }
        }

        if(name=="" || email=="" || phno==""|| pass==""|Gender=="")
            {
                window.alert("Fill the requirements!")
            }
        if(pass!==cpass)
            {
                window.alert("check password");
            }
            else{
                window.confirm(`
                    \nsuccess👍\n
                    Name -> ${name}\n
                    UserName -> ${username}\n
                    Email -> ${email}\n
                    Gender -> ${Gender}\n

                    `);
            }

}