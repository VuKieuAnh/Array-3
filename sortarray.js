let a=[3, -4, 5, 100, -5, 2];
let n = a.length;
for(let i=(n-1); i>=0; i--){
    for(let j=1; j<=i; j++){
        if(a[j-1]>a[j]){
        let temp = a[j-1];
         a[j-1]= a[j];
         a[j]= temp;
        }
    }
}
