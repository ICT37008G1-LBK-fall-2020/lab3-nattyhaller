currency = prompt("თანხა","");

let USD;
let answer1;
let answer2;
let GEL;

if (currency.includes("$")){
    answer1=currency.slice(1);
    USD=answer1*2.6;
    alert("L"+USD)
}

i
if (currency.includes("L")){
    answer2=currency.slice(1);
    GEL=answer2/2.6;
    alert("$"+GEL)
}
