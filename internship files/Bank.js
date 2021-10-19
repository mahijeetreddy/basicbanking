
function Transfer() 
{
var myaccount=parseInt(document.getElementById('MahijeetBalance').innerText);
 
var to_acc=document.getElementById('To').value;

var transfer_Amount=parseInt(document.getElementById('Amount').value);
if(myaccount>transfer_Amount && transfer_Amount>200){


var x=to_acc+"Balance";
var to_acc_balance=parseInt(document.getElementById(x).innerHTML);   
var  receiver_curr=parseInt(transfer_Amount+to_acc_balance);
let myaccount=parseInt(document.getElementById('MahijeetBalance').innerText)-transfer_Amount;
alert("Your Account Balance is "+myaccount+"\n"+"Transacted Rs."+transfer_Amount+" to "+to_acc);
document.getElementById(x).innerHTML=receiver_curr;
document.getElementById('MahijeetBalance').innerText=myaccount;
alert("Continue")
document.getElementById('MahijeetBalance').innerText=myaccount;
window.location="Last.html";

}

else 
 {
     alert("Insufficient Balance For the Transaction ")
 }

}    
