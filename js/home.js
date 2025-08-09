/*var age =22
var userName="Ahmad"
var isStudent=true;
var mark=null
var user = {name:"ahmad",age:22}
var grads =[80, 90, 70]

console.log(age)
console.log(userName)
console.log(isStudent)
console.log(mark)
console.log(user)
console.log(grads)

var navBar =document.getElementById('navbar')
console.log(navBar)
navBar.style.backgroundColor="red"
navBar.style.borderRadius="40px"

var homeLink= document.getElementsByTagName('a')[0]
console.log(homeLink)
homeLink.style.color="white"
homeLink.style.fontSize="20px"
homeLink.innerHTML="Home Link"

var gridImage=document.getElementsByClassName('gridImage')[1]
console.log(gridImage)
gridImage.src= "../media/women.png"
*/

/*
var x=5

if(x>=8)
{

   console.log('x is greater or equal 8') 
}    

else if(x>=5)
{

   console.log('x is greater or equal 5') 
} 

else 
{

   console.log('x is not') 
} 
*/
var x=5
switch(x)
{

case 4 :
    console.log('x is 4')
    break;

case 5 :
    console.log('x is 5')
    break;

default :
    console.log('x is nan')
    

}

function check()
{

    var checkvalue=document.getElementById('checkvalue').value
    var checkvalue2=document.getElementById('checkvalue2').value

    var result = parseInt(checkvalue)+parseInt(checkvalue2)
   var plus =document.getElementById('result')
   plus.innerHTML=result

 

}