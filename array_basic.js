// 1-Write a function to find the largest element in an array.
let k = [2,5,7,8,4] ;

function theLargestInArray(k){
    let long=k.length;
    let x= k[0];
    for (let i=1;i<long;i++){
        if(x< k[i]){
            x=k[i];
        }
    }

   return x;
}
console.log(theLargestInArray(k));
// 2-Write a function to find the smallest element in an array.
// function theSmallestInArray(k){
//     let long=k.length;
//     let y= k[0];
//     for (let i=1;i<long;i++){
//         if(y> k[i]){
//             y=k[i];
//         }
//     }
//     return y;
// }

// 3-Write a function to find the sum of all elements in an array.
function sum(k){
    let long=k.length;
    let y= k[0];
    for (let i=1;i<long;i++){
        y+=k[i];
    }
    console.log(y);
    return y;
}
sum(k);

// 4-Write a function to find the average of all elements in an array.
function avg(k){
    long=k.length;
    return sum(k)/long;
}
console.log(avg(k))
// 5-Write a function to find the median of all elements in an array.

 
// function median(sort(k)){
//     if(long%2==0){
//         let z= (newk[long/2]+newk[long/2-1])/2
//     }else{
//         let z=newk[(long-1)/2]
//     }
// }
function median(mid){
    newArr=mid.sort(function(a, b){return a - b});
    long=mid.length;
    if(long%2==0){
                let z= (newArr[long/2]+newArr[long/2-1])/2
            }else{
                let z=newArr[(long-1)/2]
            }
            return z;
}

// 6-Write a function to remove all duplicates from an array.
let c=0
function counter(c){
  return ++c;
}

function removeAllDuplicates(){
 let newArray;
 let v=newk[0];
 newArray[0]=v;
 for (i=1;i<long;i++){
 if (v !==newk[i]){
    v=newk[i]
    newArray[counter(c)]=v
 }
}
return newArray;
}
// 7-Write a function to sort an array in ascending order.
function myFunction2() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demo").innerHTML = points;
  }

// 8-Write a function to sort an array in descending order.you can use reverse from 7
points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;

points.sort(function(a, b){return b - a});
document.getElementById("demo2").innerHTML = points;

// 9-Write a function to shuffle the elements of an array randomly.
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}