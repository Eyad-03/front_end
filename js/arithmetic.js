function add()
{

var add1=document.getElementById('add1').value;
var add2=document.getElementById('add2').value;

var resultadd=parseInt(add1)+parseInt(add2);
var plus=document.getElementById('resultadd');
plus.innerHTML=resultadd;

}

function sub()
{

var sub1=document.getElementById('sub1').value;
var sub2=document.getElementById('sub2').value;

var resultsub=parseInt(sub1)-parseInt(sub2);
var plus=document.getElementById('resultsub');
plus.innerHTML=resultsub;

}

function mul()
{

var mul1=document.getElementById('mul1').value;
var mul2=document.getElementById('mul2').value;

var resultmul=parseInt(mul1)*parseInt(mul2);
var plus=document.getElementById('resultmul');
plus.innerHTML=resultmul;

}

function div()
{

var div1=document.getElementById('div1').value;
var div2=document.getElementById('div2').value;

var resultdiv=parseInt(div1)/parseInt(div2);
var plus=document.getElementById('resultdiv');
plus.innerHTML=resultdiv;

}