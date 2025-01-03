function passivesum(a,b,func){
    ans = func(a,b)
   return ans
}
function sum(a,b){
    return a+b
}
console.log(passivesum(4,5,sum))