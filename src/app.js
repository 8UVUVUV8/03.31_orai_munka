/*
File: app.js
Author: Szekeres András
Copyright: 2023, Szekeres András
Group: Szoft I-2 N
Date: 2023-03-31
Github: https://github.com/8UVUVUV8/
Licenc: GNU GPL
*/

const atelek = document.querySelector('#aTelek');
const btelek = document.querySelector('#bTelek');
const calcButton = document.querySelector('#calcButton');
const resUlt = document.querySelector('#Res');



calcButton.addEventListener('click', ()=>{
    const Atelek = atelek.value;
    const Btelek = btelek.value;
    
    console.log(Atelek,Btelek);
    calculatusz(Atelek,Btelek);
});

function calculatusz(A,B){
    let res = 0.75*((3/2)*((Math.pow(A,2)*Math.sqrt(3)))+(3/2)*((Math.pow(B,2)*Math.sqrt(3))))
    resUlt.value = res;
    jokivansag();
};
function jokivansag(){
    alert("Minél előbbi jobbulást kívánok a tanár úrnak!");
};