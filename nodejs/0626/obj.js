var obj = {
greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]); 

// funtion and arrays
var arr = [];
arr.push(function(){
    console.log('Hellow world 1');
})
 arr.push(function(){
    console.log('Hellow world 2');
})
arr.push(function(){
    console.log('Hellow world 3');
})

arr.forEach(function(item){
    item();
});