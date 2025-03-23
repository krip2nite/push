function fun1(){
    var a = 40;
    if (a == 40){
        var a= 10;
        setTimeout((b) => console.log('a',b), 0, a);
        // sending the 'a' as an argument at the end of the function
        // the function gets the b(parameter) in that moment of the code and will print 10
    }
    a = 30;
}



fun1();