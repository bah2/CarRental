

"use strict";


window.onload = function (){
    const btncollector = document.getElementById("btnid");
    btncollector.onclick = cal;
      function btncollector() {

    console.log("estimateTotalValue");

let numberofdays = document.getElementById("numberofdays");
let days = numberofdays.value;
let estimateTotalValue = days * 29.99;

let carrentalsname = document.getElementById("carrentalsid");
carrentalsname.innerHTML= "Car Rentals: $" + estimateTotalValue ;
   

let extraPerDay = 0;
if (document.getElementById("tollTag").checked) { extraPerDay += 3.95;
}
if (document.getElementById("gps").checked) { extraPerDay += 4.95;
}
if (document.getElementById("roadside").checked) { extraPerDay += 2.95;
}

let option = document.getElementById("optionsid");
option.innerHTML= "option:" + (numberofdays * extraPerDay.toFixed(2));

let surcharge = 0;
if (document.getElementById("noid").checked) {
   surcharge = 0;;
}



else if (document.getElementById("yesid").checked) { 
    surcharge= 0.3 * estimateTotalValue;
}

let uts25name = document.getElementById("uts25id");
uts25name.innerHTML = "Under 25 Sourcharge: $" +  surcharge;

let totaldue = document.getElementById("totalid");
   
let add = totaldue + surcharge + (days * extraPerDay);
totaldue.innerHTML= "Total Due: $" + add.toFixed(2);
        return totaldue;
    }
    


}



