function validateForm() { 
// Validation 
const formComponent = [ 
document.getElementById('tagline').value , 
document.getElementById('color').value , 
document.getElementById('size').value ,
document.getElementById('Quantity').value , 
document.getElementById('date').value,
document.getElementById('address').value,
]; 
var j=0; 
for(var i=0;i<=5 && j!=1;i++) 
{ 
if (formComponent[i]==="") { 
 j=1; 
alert("Please fill the details"); 
return; 
} 
} 
// Bill 
const reciept1 = `RECEIPT \nTagline: ${formComponent[0]}\nColor: 
${formComponent[1]}\nsize: ${formComponent[2]}\nQuantity:${formComponent[3]} 
\ndate:${formComponent[4]}\naddress:${formComponent[5]}`; 
confirm(reciept1); 
} 
const form = document.getElementById("Form"); 
console.log(form) 
form.addEventListener("submit", (event) => { 
// stop form submission 
event.preventDefault(); 
});