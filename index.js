const usersDatebase ={
    "Aliyu":{
        firstname:"AGA",
        lastname:"abu",
        password:"aliyugambo1",
        email:"agathinktwice123@gmail.com",
        accountActivated:true
    },
    "Abu":{
        firstname:"AGA2",
        lastname:"abu",
        password:"aliyugambo2",
        email:"agathinktwice1234@gmail.com",
        accountActivated:true
    },
    "Umar":{
        firstname:"AGA3",
        lastname:"abu",
        password:"aliyugambo3",
        email:"agathinktwice1235@gmail.com",
        accountActivated:false
    },
    "Usman":{
        firstname:"AGA4",
        lastname:"abu",
        password:"aliyugambo4",
        email:"agathinktwice1236@gmail.com",
        accountActivated:true
    }
}

function desplayUserDetails(){

    // UserName Validation
let username = prompt("Please Enter Your Username");

while (validateUsername(username) == false){
    username = prompt("Please Enter Your a valid Username");
}

if (username == null){
    return
}

// Password Validation
let password = prompt("Please Enter Your Password");

while (validatePassword(password) == false){
    password = prompt("Please Enter Your a valid Password");
}

if (password == null){
    return
}

// Comflm Password
let ComfirmPassword = prompt("Please Enter ComfirmPassword")

while (ComfirmPassword !==password ){
    ComfirmPassword = prompt("Password incorrect. Comfirm your password again!")
}

if (ComfirmPassword == null){
    return
}



// Checking for username in the database
const user = usersDatebase[username];
if (user == undefined){
    alert("User Not found! please register on the app")
    return
}
alert(`
    User Found with the following details
    FirstName: ${user.firstname}
    Lastname: ${user.lastname}
    Email: ${user.email}
    Account Activated: ${user.accountActivated}
`)


// console.log(username,password,ComfirmPassword);
// alert("Everythings are Valid!")

}
desplayUserDetails()
alert("You have come to the end of this program!");

function validateUsername(username){

    if (username == null){
        return true
    }
    if(username.length >10){
        return true
    }else{
        return true
    }
}

function validatePassword(password){

    if (password == null){
        return false
    }
    if(password.length <6){
        return false
    }else{
        return true
    }
}

