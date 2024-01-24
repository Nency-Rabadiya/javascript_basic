var str = "xzxzx";
var n = str.length;
var count = 0;
for (var i = 0; i < n - 2; i++) {
  for (var j = i + 1; j < n - 1; j++) {
    var a = str.slice(0, i + 1);
    console.log('a=', a);
    var b = str.slice(i + 1, j + 1);
    console.log('b=', b);
    var c = str.slice(j + 1);
    console.log('c=', c);
    if (a + b !== b + c && b + c !== c + a && a + b !== c + a) {
      count++;
    }
  }
}
console.log(count);
