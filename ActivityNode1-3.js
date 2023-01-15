let lee=['Apple','orange','yuzu','grape'];
let index = lee.indexOf('yuzu');
console.log(index);
lee.push('berry');
console.log(lee);
lee.unshift('cherry');
console.log(lee);
lee.push('banana');
console.log(lee);
const lastElement=lee.pop();
console.log(lastElement);
console.log(lee);
const firstElement=lee.shift();
console.log(firstElement);
console.log(lee);
console.log(Array.isArray(lee));


/////
const book={
    "book_name":"Blockchain TechHistory",
    "Description":"The history of blockchain technology and foundation Knowledge",
    "Author": "Satoshi",
    "Number Of Page" :200001
}
console.log(book["book_name"]);
console.log(book["Description"]);
console.log(book["Author"]);
console.log(book["Number Of Page"]);

////
function sum(a,b){
    return a+b
 }
 console.log(sum(1,2));

    if (sum(2,4)!=6) {
        console.log("Test Fail")
    } else{
        console.log("Test Pass!")
    }