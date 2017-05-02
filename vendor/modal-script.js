document.addEventListener("DOMContentLoaded", function () {

    
  var UserInputData = {
    firstname,
    lastname,
    email,
    dateOfBirth,
    password,
    confirmPassword,
    fewWords
  };

  var iconHamburger = document.querySelector('.icon-hamburger');
  var iconHamburgerCross = document.querySelector('.icon-hamburger-cross');

  iconHamburger.addEventListener("click",showMenu,false);
  iconHamburgerCross.addEventListener("click",hideMenu,false);


    var register = document.querySelector('.sign-up');
    register.addEventListener("click", function(){
      document.body.classList.add('modal-open');
      dateOfBirthGenerate();
      hideMenu();
    },false);

    var registerClose = document.querySelector('.close');
    registerClose.addEventListener("click", closeModal, false);

    /*var checkData = document.querySelectorAll('#firstname, #lastname');
    checkData.forEach(checkName);*/


    /*UserInputData.email.addEventListener('blur', function(){
      var mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
      var inpMail = this.value;
      if(!mailReg.test(inpMail)){
         this.classList.add('wrong-value') ;        
      } else{
              this.classList.remove('wrong-value') ;
            } 
      });*/
    
    UserInputData.password.addEventListener('keyup', checkpass);
    UserInputData.password.addEventListener('blur',isPasswordCorrect,false);

    UserInputData.confirmPassword.addEventListener('blur',isPasswordCorrect);
      document.addEventListener("keyup", function (event) {
        if (event.keyCode === 27) closeModal();
      }, false);

    

    var registerButton = document.querySelector('.register');
    registerButton.addEventListener("click",function(event){
        
        event.preventDefault();
        window.setTimeout(closeModalAndRegister, 1000);
      
    },false);


const maxLength= UserInputData.fewWords.getAttribute('maxlength');

UserInputData.fewWords.addEventListener('keyup', howMuchChar, false);


const howMuch = document.querySelector('.howMuchChar');

function howMuchChar() {
    var textLength = this.value.length;    
    howMuch.innerHTML = (maxLength - textLength);
}

function closeModal() {

    document.body.classList.remove('modal-open');
    document.querySelector('form.sign-up').reset();
    var input  = document.querySelectorAll('.input');
    var inputLength = input.length;
    console.log(inputLength);
      for (i=0; i<inputLength; i++)
      {
        input[i].classList.remove('wrong-value');
      };
    console.log(UserInputData.dateOfBirth.value);
}

function closeModalAndRegister() {
  if(UserInputData.firstname.validity.patternMismatch!=true && UserInputData.lastname.validity.patternMismatch!=true
    && UserInputData.email.validity.typeMismatch!=true
    && UserInputData.dateOfBirth.value!=0
    && UserInputData.password.value!=0
    && UserInputData.password.value==UserInputData.confirmPassword.value){
    
    var user1 = UserInputData.firstname.value + UserInputData.lastname.value;
    saveToLocalStorage(user1, UserInputData);
    alert("Odczytano z localStorage: " + readFromLocalStorage(user1));
    closeModal();
  } else {
    alert("Wypełnij poprawnie wszystkie pola formularza");
  }
}


/*function checkName(value,index){
        checkData[index].addEventListener('blur',function(){
          var nameReg = /^[a-zA-Z\s]{3,}$/;
          var inpValue = this.value;
          if(!nameReg.test(inpValue))
            {
              this.classList.add('wrong-value') ;
            } else 
              {
                this.classList.remove('wrong-value');
                 
              } 
        },false);
}*/

function dateOfBirthGenerate() {
  var d = new Date();
  var currentYear = d.getFullYear();
  for (i=1900; i<=currentYear;i++){

    var element = document.createElement("option");
    element.appendChild(document.createTextNode( i ));
    document.getElementById('dateOfBirth').appendChild(element);
  }
}


var  passwordStrength = function (password) {
  var strength = 0;

  var regExpArr = [
      /[0-9]/,
      /[a-z]/,
      /[A-Z]/,
      /[!-//:-@[-`{-~]/,
      /.{6}/,
      /.{12}/
  ];



  regExpArr.forEach(function (regexp){
    if(regexp.test(password)){
      strength ++;
    }
  });

  return{
    value: strength,
    max: regExpArr.length
  };
}


function checkpass(password){
  var progress = document.querySelector('#passwordComplete');
  var strength = passwordStrength(this.value);

 progress.value = strength.value;
 progress.max = strength.max;
 }



function isPasswordCorrect() {

  var passwordValue = password.value;
  var confirmPasswordValue = confirmPassword.value;
  
    if(confirmPasswordValue!=""){
      if(passwordValue!==confirmPasswordValue) {

        console.log('Hasło nie się zgadza');
        password.classList.add('wrong-value');
        confirmPassword.classList.add('wrong-value');

      }  else {
        console.log('hasło zgadza się');
        password.classList.remove('wrong-value');
        confirmPassword.classList.remove('wrong-value');
      }
    } else{
      password.classList.remove('wrong-value');
      confirmPassword.classList.remove('wrong-value');
    }
}


function showMenu() {  
  var navContainer = document.querySelector('.nav-container');
  navContainer.classList.add('open-menu');

  clickMenuOption = document.querySelectorAll('.menu-link');

  clickMenuOption.forEach(function(value, index) {
    clickMenuOption[index].addEventListener('click',hideMenu);
  });

}

function hideMenu(){
  var navContainer = document.querySelector('.nav-container');
  navContainer.classList.remove('open-menu');
}


function saveToLocalStorage(newObjectName, data) {

  localStorage.setItem(newObjectName, JSON.stringify(data));

}

function readFromLocalStorage(element) {

  return JSON.parse(localStorage.getItem(element));
}



});

