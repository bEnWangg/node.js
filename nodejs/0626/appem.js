var Emitter = require('events');//因為有module.exports = Emitter; 若不呼叫emitter 就直接改成其他名字]

var eventConfig = require('./config').events;//此步驟可以讓之後要用greet時，可用eventConfig.GREET取代

var emtr = new Emitter(); // 因為emmiter 裡有.on 跟 emit  這裡的命名可以隨意

emtr.on(eventConfig.GREET,function(){
    console.log('Somewhere,someone said hellow');
});

emtr.on(eventConfig.GREET,function(){
    console.log('A greetion occurred!');
});//two listener 由下面的emtr.emit 觸發

console.log('Hello');
emtr.emit(eventConfig.GREET);//這行觸發上面的emtr，如果拿掉就只會顯示Hello