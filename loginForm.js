function replaceClass(id, oldClass, newClass) {
    var elem = document.getElementById(id);
    elem.classList.remove(oldClass);
    elem.classList.add(newClass);
}

//document.getElementById("button22").onclick = function clickOnLogin() {
  //  replaceClass("loginClick", "newmydiv", "newmydiv2");
    //replaceClass("formDiv", "formbox1", "formbox"); 
   
//}
//document.getElementById("button11").onclick = function clicklogged() {
    //replaceClass("formDiv", "formbox", "formbox1");
  //  replaceClass("loginClick", "newmydiv2", "newmydiv");
   
//}


function errorSet(id, error){
    element  = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function getClearError(){
    
    error = document.getElementsByClassName("FormError");
    for(let i of errors){
        i.innerHTML = "";
    }
}

function formValidate(){
    var returnValue = true;

    getClearError();

    var name = document.forms['myForm']["fname"].value;
        if(name.length < 5 ){
        errorSet("name", "**Name is too Short");
        returnValue = false;
    }

    var Email = document.forms['myForm']["femail"].value;
        if(Email.length > 5 ){
        errorSet("email", "**Email can't be too Long");
        returnValue = false;
    }

    var Password = document.forms['myForm']["femailpassword"].value;
        if(Password.length < 4 ){
        errorSet("password", "**Length Should be atleast of 8 character");
        returnValue = false;
    }

    var cPassword = document.forms['myForm']["femailconfirmpassword"].value;
        if(cPassword.length != Password ){
        errorSet("confirmpassword", "**Password Should be same");
        returnValue = false;
    }

    var Age = document.forms['myForm']["userAge"].value;
        if(Age > 100 || Age <= 0 ){
        errorSet("age", "**Enter Age between 1 - 100");
        returnValue = false;
    }


       
    return returnValue;

}