document.addEventListener("DOMContentLoaded", function () {

  
  var enterpass = document.querySelector('#enterpass');

 


    var register = document.querySelector('.sign-up');
    register.addEventListener("click", function(){
      document.body.classList.add('modal-open');
      howMuch.innerHTML = (maxLength);
    },false);

    var registerClose = document.querySelector('.close');
    registerClose.addEventListener("click", closeModal, false);

    var checkData = document.querySelectorAll('#firstname, #lastname');
    checkData.forEach(checkName);


    var mailAdress = document.querySelector('#email');
    mailAdress.addEventListener('blur', function(){
      var mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
      var inpMail = this.value;
      if(!mailReg.test(inpMail)){
         this.classList.add('wrong-value') ;
      } else{
              this.classList.remove('wrong-value') ;
            } 
      });

    /*------------------------------------------------------------------------------------------------*/
    var password = document.querySelector('#password');
    var enterpass = document.querySelector('#enterpass');

    password.addEventListener('keyup', checkpass);

    password.addEventListener('blur',isPasswordCorrect,false);
    enterpass.addEventListener('blur',isPasswordCorrect);
      document.addEventListener("keyup", function (event) {
        if (event.keyCode === 27) closeModal();
      }, false);

    enterpass.addEventListener('blur',function(){
      if(!this.value==inputPassword.value) console.log('hasła róznia sie');
    },false);






    var registerButton = document.querySelector('.sign-up');
    registerButton.addEventListener("submit",function(event){
        event.preventDefault();
        console.log('zamykam');
        window.setTimeout(closeModal, 1000);
    },false);


    var text = document.querySelector('#fewWords');

    const maxLength= text.getAttribute('maxlength');
    const howMuch = document.querySelector('.howMuchChar');


    text.addEventListener('keyup', howMuchChar, false);


/*---------------------------------------------------------------------------------------------------*/  

function howMuchChar() {
    var textLength = this.value.length;
    howMuch.innerHTML = (maxLength - textLength);
}

function closeModal() {
  isPasswordCorrect();
    document.body.classList.remove('modal-open');
    document.querySelector('form.sign-up').reset();
    var input  = document.querySelectorAll('.input');
    var inputLength = input.length;
    console.log(inputLength);
      for (i=0; i<inputLength; i++)
      {
        input[i].classList.remove('wrong-value');
      };
}


function checkName(value,index){
        checkData[index].addEventListener('blur',function(){
          var nameReg = /^[a-zA-Z\s]{3,}$/;
          var inpValue = this.value;
          if(!nameReg.test(inpValue))
            {
              this.classList.add('wrong-value') ;
            } else 
              {
                this.classList.remove('wrong-value') ;
              } 
        },false);
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
  var enterpassValue = enterpass.value;
  
    if(enterpassValue!=""){
      if(passwordValue!==enterpassValue) {
        console.log('Hasło nie się zgadza');
        password.classList.add('wrong-value');
        enterpass.classList.add('wrong-value');
      }  else {
        console.log('hasło zgadza się');
        password.classList.remove('wrong-value');
        enterpass.classList.remove('wrong-value');
      }
    } else{
      password.classList.remove('wrong-value');
      enterpass.classList.remove('wrong-value');
    }
}


});

