let a = [2, 3,4 ,5, 7, 8,81, 100, 102, 105];
let value = +prompt("Moi ban nhap vao so");
let index=-1;
let left=0;
let right=a.length;
let mid=(left+right)/2;
while(left<=right){
    //lay vi tri o giua
    mid=parseInt((left+right)/2);

    //neu phan tu giua ma bang value -> mid
    if(a[mid]==value){
        index=mid;
        break;
    }
    else{
        //neu phan tu o giua nho hon value -> xet o ben phai
        //neu khong -> xet o ben trai
        if(value >a[mid]){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
}
console.log(index);
// if(index !=-1){
//     //ket luan value co trog mang
// }
// else{
//     //ket luan value khong co trong mang
// }




// let index =-1;
// let value;
// //di tu dau mang -> cuoi
// //tìm kiếm tuyến tính
for(let i=0; i<a.length; i++){
    if(a[i]==value){
        index=i;
        break
    }
}

// if(index !=-1){
//     //ket luan value co trog mang
// }
// else{
//     //ket luan value khong co trong mang
// }

