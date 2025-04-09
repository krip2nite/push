export function setupTimer(element) {
    const tic = () => {
      let time = new Date().toLocaleTimeString();
      element.innerHTML = `time is ${time}`;
      
    };
    tic();
    setInterval(tic, 1000) 
  }