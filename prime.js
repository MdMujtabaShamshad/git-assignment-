//check prime number
let num=13;
let count=0;
for(let i=1;i<num;i++){
if(num%i==0){
count++
}
}if(count==!2){
console.log("prime")
}else{
console.log("not a prime")
}

//check palindrome
let string="aba"
let bag="";
for(let i=string.length;i>=0;i--){
bag+=string[i]
}
if(string[i]==string){
console.log("yes")
}else{
console.log("no")
} 