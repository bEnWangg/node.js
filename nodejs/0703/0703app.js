var obj ={
name:'john doe',
greet: function(){

    console.log(`Hello ${ this.name}`);
}

}

obj.greet();
obj.greet.call({name:'jane doe'});
//.call 會指向this.name，將會覆蓋一開始設立的name:'john doe'

obj.greet.apply({name:'jane doe'});
//跟call很像 但若上面的function裡有變數，apply會是矩陣的模式