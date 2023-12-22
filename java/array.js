console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 17 , 9  ,45 ]

 ["Str" ,"alex","moh"]

 ['the','fox over lazy' , 'dog'  ]

*/


/*
2
What the index of "Banana">>2,"Tomato">>1
var fruits=["Tomato","Banana","Watermelon"]

*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(f){
    return f[0];
}

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(f){
   let long= f.length
   return f[long-1]
}

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9];
data.shift();
data.shift();
data.shift();
data.unshift( 1, 3, 4, 6 ,8 );
data.push( 10 ); 

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
if(long%2==0){
    return x[long/2]+x[long/2-1];
}else{
    return x[(long-1)/2];
}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self we can add if for QA
*/
function indexOfArray(nums,z){
    return nums[z];
}

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(nums){
    data.pop()
    return nums;
}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(nums,y){
    nums.push(y)
    return nums;
}


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sum(k){
    let long=k.length;
    let y= k[0];
    for (let i=1;i<long;i++){
        y+=k[i];
    }
    console.log(y);
    return y;    
}

function sum(k){
    let long=k.length;
    let y= k[0];
    i=0
    while (i++<long){
        y+=k[i];
    }
    console.log(y);
    return y;
    
}



/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(k){
    let long=k.length;
    let y= k[0];
    for (let i=1;i<long;i++){
        if(y> k[i]){
            y=k[i];
        }
    }
    i=0
    while (i++<long){
        if(y> k[i]){
            y=k[i];
        }
    }
    return y;
}

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(x,y){
   z= x.indexof(y)
   for(i=0;i<=z;i++){
    let c= x[i]
    data.shift();
    if(i!=z){
        data.pop(c);
    }
   }
}

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(nums){
    let j=0;
    let nArray=[];
    for (i=0;i<nums.length;i++){
        if(nums[i]%2==1){
            nArray[j++]=nums[i];
        }
    }
    return nAraay
}

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
sum=0
function aveArray(y){
 for(j=0;j<y.length;j++){
    sum+=y[j];
     }
     return sum/y.length
}

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(k){
    let n=0;
    let x=k[0]
    for(let v=1;v<k.length;v++){
        if(x.length>k[v].length){
            x=k[v];
            n=v
        }
        return k[n];
    }
}

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(a,b){
    let no=0;
    for (let index = 0; index < a.length; index++) { //you can use[] with the string name to convert it to array 
        if (charAt(index)==b) {
            no++
        }
        return no ;
        
    }
}

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(g){
 let   secArray=[];
long= length.g
for(let c=0;c<long;c+=2){
    long2=length.g[c];
    if (long2%2==1){
        secArray[i++]=g[c];
    }   
}
 return secArray;
}

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self


Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(){
    long= k.length
    for(j=0;j<long;j++){
        k[j]=k[j]**j;
    }
}
var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(g){
    let   secArr
   long= length.g
   for(let c=0;c<long;c+=2){
       long2=length.g[c];
       if (long2%2==1){
           secArr[i++]=g[c];
       }
       
   }
   let c=0
   while(c<long){
    long2=length.g[c];
    if (long2%2==1){
        secArr[i++]=g[c];
    }
    c+=2;}
    return secArr;

}