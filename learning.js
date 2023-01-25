let marks_class_12 = [91, 34, 57, 43, 56, false, "Not present"];
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
marks_class_12[7] = 78; //adding a new value in array
marks_class_12[0] = 56; //changing of array
console.log(marks_class_12);
console.log(marks_class_12[7]);
console.log("length of array", marks_class_12.length);
let arr1 = [91, 34, 56]; //converting loops in array
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
} //the end [this is how we can convert any array into loop]
let arr2 = [91, 34, 56]; //converting loops in array
for (let i in arr2) { // this is for in loop
    console.log(arr2[i]);
} // you can also this for of loop same as usual
//array methods)
let num = [23, 45, 56, 78, 90, 14];
let b = num.toString();
console.log(b);
let c = num.join("_");
console.log(c);
num.pop();
console.log(num);
num.push(556);
console.log(num);
num.shift();
console.log(num);
num.unshift(33);
console.log(num);
delete num[0]; //deleting 0th index
console.log(num);
let num_more = [32, 44, 56, 12, 34];
let newarray = num.concat(num_more); //concating new array
console.log(newarray);
let numm = [1100, 999, 89, 547, 55, 12, 4]
numm.sort()//alphabetically sort (first it comes 1 then 2 and so on its taking these just like strings)
console.log(numm)
//more about alphabetically sorting
let alpha = ["arun", "tushar", "mukesh", "praful", 'cat', 'kylie', 'wednesday', 'jeena', 'enid']
alpha.sort()
console.log(alpha)
let compare = (kb,jb)=>{//creating one compare function to get these numbers.sort in --> Ascending orders
    return kb-jb//using these variables cause these variables are identical
}
let ascnum = [1100, 999, 89, 547, 55, 12, 4]
ascnum.sort(compare)
console.log(ascnum)
ascnum.reverse()
console.log(ascnum)
//splice array methods
let splicee = [2,4,5,6,7,8,9,10]
splicee.splice(2,3,1023,1024,1025)//from 2 will be jumping after 2 index, from 3 we will delete 3 more index like : 3,4,5 and from 1023 we will be replaced by these indeces 
console.log(splicee)
