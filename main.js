  
  
    //          TASK 1        //
 let number1 = prompt("Enter the number") 
 let number2 = prompt("Enter the number")
 let operator =prompt("Enter the operator") 

 switch (operator) {
    case "+": {
    console.log(number1 +number2)
    break}
    case "-": {
    console.log(number1 - number2)
    break}
    case "*":{ 
    console.log(number1 * number2)
    break}
    case "/":{
    console.log(number1 / number2)
    break}
 }

  


//               TASK   2              //
 let month = prompt("1-12 arasi bir eded secin")
switch(month ){
    case 1: {
        console.log("January");
        break;
    }
    case 2 : {
        console.log("February");
        break;
    }
    case 3 : {
        console.log("March");
        break;
    }
    case 4 : {
        console.log("April");
        break;
    }
    case 5 : {
        console.log("May");
        break;
    }
    case 6 : {
        console.log("June");
        break;
    }
    case 7 : {
        console.log("July");
        break;
    }
    case 8 : {
        console.log("August");
        break;
    }
    case 9 : {
        console.log("September");
        break;
    }
    case 10 : {
        console.log("October");
        break;
    }
    case 11 : {
        console.log("November");
        break;
    }
    case 12 : {
        console.log("December");
        break;
    }
    default: {
        console.log("ilde 12 ay var");
    }

}
//               TASK 3         ///  
let sideA = prompt("Enter the number")
let sideB = prompt("Enter the number")
let sideC = prompt("Enter the number")
if ( sideA==sideB && sideB==sideC){
console.log("Beraberterefli ucbucaq");}

else if (sideA==sideB || sideA==sideC || sideB==sideC ) {
    console.log("Beraberyanli ucbucaq")
}
else{
    console.log("Muxtelif terefli ucbucaq")   
}