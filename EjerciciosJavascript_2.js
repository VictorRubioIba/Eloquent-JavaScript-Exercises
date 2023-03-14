console.log("Minimum")
//Write a function min that takes two arguments and returns their minimum.

function min (num1, num2){
    return Math.min(num1,num2)
}
console.log(min(0,10));
console.log(min(0,-10));


console.log("")
console.log("")

console.log("Recursion")

//Define a recursive function isEven corresponding to this description.
// The function should accept a single parameter (a positive, whole number) and return a Boolean.


function isEven(num3){
    if(num3==0){
        return true;
    }else if(num3==1){
        return false;
    }else if(num3<0){
        return isEven(num3+2)
    }else {
        return isEven(num3-2)
    }
 }
console.log(isEven(50))
console.log(isEven(75))
//console.log(isEven(-1))

console.log("")
console.log("")

console.log("Bean counting")

//Next, write a function called countChar that behaves like countBs, 
//except it takes a second argument that indicates the character that 
//is to be counted (rather than counting only uppercase “B” characters). 
//Rewrite countBs to make use of this new function.

function countBS(parameter1){
    let count=0;
    for(let i=0;i<parameter1.length;i++){
        
        if(parameter1[i]=="B"){count++}
    }
return count;
}

function countchar(parameter2, parameter3){
    let count1=0;
    for(let i=0;i<parameter2.length;i++){
        
        if(parameter2[i]==parameter3){count1++}
    }
return count1;
}



console.log(countBS("BBC"));
console.log(countchar("kakkerlak","k"));
