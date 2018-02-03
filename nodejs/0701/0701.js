var EventEmitter = require('events');
var util = require('util');

function Greetr(){
this.greeting = 'Hellow world';

}

util.inherits(Greetr,EventEmitter);//EventEmitter 的events可以繼承 function Greetr

Greetr.prototype.greet = function(data){//如果要再event觸發的同時加入資料，可在function中加入date
console.log(this.greeting+':'+data);//IF want pass data to all listener, 
this.emit('greet',data);

}
var greeter1 = new Greetr();//同樣可以繼承function Greetr(){

greeter1.on('greet',function(data){
    console.log('someone greet!:'+ data);
}

);

greeter1.greet('tony'); // tony is that data which add to the function