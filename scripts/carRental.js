



const txt11 = document.getElementById("optionsid");
const txt12 = document.getElementById("uts25id");
const txt13 = document.getElementById("totalid");

window.onload = function()
{
    document.getElementById("numberofdays").focus();
  document.getElementById("btnid").onclick = getValues;


};



function getValues(){
numberofdays = document.getElementById("numberofdays").value;
tollTag = document.getElementById("tollTag").value;
gps = document.getElementById("gps").value;
roadside = document.getElementById("roadside").value;
noid = document.getElementById("noid").value
yesid = document.getElementById("yesid").value


let numberofdays = document.getElementById("numberofdays")
let days = numberofdays.value;
let estimateTotalValue = days * 29.99;





    tollTag * numberofdays;
    gps * numberofdays;
    roadside * numberofdays;
    
    // option
    let extraPerDay = 0;
if (document.getElementById("tollTag").checked) { extraPerDay += 3.95;
}
if (document.getElementById("gps").checked) { extraPerDay += 4.95;
}
if (document.getElementById("roadside").checked) { extraPerDay += 2.95;
}

let carrentalsname = document.getElementById("carrentalsid");
carrentalsname.innerHTML= "Car Rentals: $" + estimateTotalValue ;
   


let option = document.getElementById("optionsid");
option.innerHTML= "option:" + (numberofdays * extraPerDay.toFixed(2));



let uts25name = document.getElementById("uts25id");
uts25name.innerHTML = "Under 25 Sourcharge: $" +  surcharge;


    let surcharge = 0;
if (document.getElementById("noid").checked) {
   surcharge = 0;;
}

else if (document.getElementById("yesid").checked) { 
    surcharge= 0.3 * estimateTotalValue;
}









   
    // = estimateTotalValue();

    document.getElementById("").value = "$" +  rcname.toFixed(2);
};


function estimateTotalValue()
{
	


}





