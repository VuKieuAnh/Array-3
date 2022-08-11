let a = [
    [2, 3, 4, 5],
    [2, 23,4, 5],
    [2, 33,24,5],
    [2, 3, 4, 5],
      ];
// let sum=0;
// for(let i=0; i<a.length; i++){
//     console.log(a[i][i]);
//    sum+=a[i][i];
// }
// console.log(sum)

let sum2=0;
let n= a.length -1;
for(let i=0; i<a.length; i++){
    console.log(a[i][n-i]);
   sum2+=a[i][n-i];
}
console.log(sum2)