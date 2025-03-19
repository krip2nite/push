function sleep(timeout){
    let running = true;
    const timestamp = new Date().getTime();
    while(running)
    {
        let current = new Date().getTime();
        if (current = timestamp >= timeout)
            running = false;
        //setTimeout(()=> running = false, timeout); this is an error will make infinit loop 
    }
}
sleep(5000);
console.log("Hello world");