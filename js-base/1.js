var x = 2
function test () {
  this.x = 1
}

var obj = new test()
console.log(obj.x);
console.log(x);