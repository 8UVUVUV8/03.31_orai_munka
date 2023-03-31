const atelek = document.querySelector('#atelek');
const btelek = document.querySelector('#btelek');
const radio1 = document.querySelector('#exampleRadios1');
const radio2 = document.querySelector('#exampleRadios2');
const Actual = document.querySelector('#Actual');
const calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', ()=>{
    console.log("test :)");
    const Atelek = atelek.value;
    const Btelek = btelek.value;

    if(radio1.checked){
        let Elteproginfocalculusegy = ((3/2) * (Math.pow(Atelek,2)) * (Math.sqrt(3)))/2;
        let Elteproginfocalculusketto = (3/2) * (Math.pow(Btelek,2)) * (Math.sqrt(3));
        let osszeg =Elteproginfocalculusegy+Elteproginfocalculusketto
        Actual.value=osszeg.toFixed(2);
    }
    else{
        let Elteproginfocalculusegy = ((3/2) * (Math.pow(Btelek,2)) * (Math.sqrt(3)))/2;
        let Elteproginfocalculusketto = (3/2) * (Math.pow(Atelek,2)) * (Math.sqrt(3));
        let osszeg =Elteproginfocalculusegy+Elteproginfocalculusketto
        Actual.value=osszeg.toFixed(2);
    }

});