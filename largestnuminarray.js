const numbers= [12,34,56,145,35,1000]
var a = 0 ;
for (i=0 ; i<numbers.length;i++){
        if (numbers[i]<=numbers[i+1]){
            a= numbers[i+1]
        }
}
console.log(a);
