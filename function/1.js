
let rate=50;
let Qty= 200;//prompt("enter quantaty");

let amt  = (rate,qty)=>amt=rate*qty;
let disc = (amt)=>disc=amt%5;


console.log(amt(rate,Qty));
console.log(disc(amt));