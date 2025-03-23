let iLet = 10;
var iVar = 20;
var iVar = 30; // דריסת נתונים גלובלית של אובייקט
console.log('iLet from global Window object',window.iLet);
console.log('iVar from global Window object',window.iVar);

function funVar(){
    var x = 10;
    for(var x = 0; x < 5; x++){

    }
    console.log('var', x);
}
funVar(); // 5
function funLet(){
    let x = 10;
    for(let x = 0; x < 5; x++){

    }
    console.log('let', x);
}
funLet(); // 10