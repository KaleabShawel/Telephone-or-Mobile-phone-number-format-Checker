const phoneNumber = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_checker');

button.addEventListener('click', (e) => { 

    // Get the text value directly from the element
    let number = phoneNumber.value;

    if (number === "") {
        
        alert("Please enter the Phone-Number");
    }


    let teleNumberValidator = telephoneChecker(number);
    
    display.innerHTML = `Result : ${teleNumberValidator}`;

    //console.log(teleNumberValidator);

    setTimeout(() => { 
        display.innerHTML = '';
    }, 10000);

});

const telephoneChecker = (phoneNum) => { 

    
    let regexValidator = /^(\+?\d{1,4}[\s-]?)?((\(\d{1,3}\))|\d{1,3})[\s-]?\d{1,2}[\s-]?\d{1,3}$/;

    if( phoneNum.match(regexValidator)){
     
      return "valid Phone-Number Format";

   }else{

     return "Invalid Phone-Number Format";
   }

};







/*function telephoneCheck(str) {
   let regexValidator = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    
   if( str.match(regexValidator)){
     
      return true;

   }else{

     return false;
   }
   
}

let teleNumberValidator = telephoneCheck("555-555-5555");

console.log(teleNumberValidator);*/