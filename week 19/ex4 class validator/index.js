//валидация статическая
const sendBtn = document.getElementById("submit");
sendBtn.addEventListener('click',CheckStatic);

class ValidatorStatic{
    static isEmail(input) {
        return ((input.indexOf('@') !== -1) && (input.indexOf('.') !== -1))
    }
    static isDomain(input) {
        return ((input.indexOf('.com') !== -1) || (input.indexOf('.net') !== -1)|| (input.indexOf('.ru') !== -1))
    }
    static isDate(input) {
        let date = input.match(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]/);
        return date === null ? false : true
    }
    static isPhone(input) {
        let phone = input.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return phone === null ? false : true
    }
}

function CheckStatic(){
let email=document.getElementById('InputEmail').value
let domain=document.getElementById('domen').value
let data=document.getElementById('date').value
let mobail=document.getElementById('phone').value

console.log(ValidatorStatic.isEmail(email));
console.log(ValidatorStatic.isDomain(domain));
console.log(ValidatorStatic.isDate(data));
console.log(ValidatorStatic.isPhone(mobail));
}


//валидация стандартная

const sendBtn2 = document.getElementById("submit2");
sendBtn2.addEventListener('click',Check);

class Validator{
    constructor(email,domain,data,mobail){
        this.email=email;
        this.domain=domain;
        this.data=data;
        this.monbail=mobail;
    }
    isEmail(input) {
        return ((input.indexOf('@') !== -1) && (input.indexOf('.') !== -1));
    }
    isDomain(input) {
        return ((input.indexOf('.com') !== -1) || (input.indexOf('.net') !== -1)|| (input.indexOf('.ru') !== -1))
    }
    isDate(input) {
        let date = input.match(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]/);
        return date === null ? false : true
    }
    isPhone(input) {
        let phone = input.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return phone === null ? false : true
    }
}

function Check(){
let email2=document.getElementById('InputEmail2').value
let domain2=document.getElementById('domen2').value
let data2=document.getElementById('date2').value
let mobail2=document.getElementById('phone2').value

var validator = new Validator(email2,domain2,data2,mobail2);
console.log(validator.isEmail(email2));
console.log(validator.isDomain(domain2));
console.log(validator.isDate(data2));
console.log(validator.isPhone(mobail2));
}