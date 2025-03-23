// scope
// let has block-scope 
// var has function scope
// variable leak: you define variable in block, implying and than freeing of variable outside of block

function funVar(){
    for(var i = 0; i < 3; i++)
    {
        i++;
    }
    console.log(i);
}
// funVar();
function funLet(){
    for(let i = 0; i < 3; i++)
    {
        i++;
    }
    console.log(i);
}
// funLet();

