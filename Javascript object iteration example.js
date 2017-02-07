var a = JSON.parse('{"name": "me"}');
var b = JSON.parse('{"name": "you"}');
var c = [a, b];
for(var d in c) 
    console.log(c[d].name);