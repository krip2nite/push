function getPromise(timeout, value) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), timeout)
    })
  }
  function getUserPassword(probCorrectPass) {
    const passwords = ['correct', 'wrong'];
    const index =  Math.random() < probCorrectPass ? 0 : 1;
    //timeout - 1 sec
    return getPromise(1000, passwords[index]);
  }
  function login(password) {
    //returns promise in the state resolved only for passowrd 'correct' otherwise state rejected
    //timeout 2 sec
    if (password !== 'correct') {
      throw "wrong credentials"
    }
    return getPromise(2000);
  }
  function getUserData(username) {
    const users = {'Vasya': {name: "Vasya", age: 30},
    'Petya': {name: "Petya", age:40}}
    //returns promise in the state resolved if username exists with returning user data
    //otherwise state rejected with apropriate message
    if(!users[username]) {
      throw `user ${username} not found`
    }
    //timeout 1 sec
    return getPromise(1000, users[username])
  
    }
  async function funStackExample(username) {
    // getUserPassword(0.8).then(password => login(password))
    // .then(() => getUserData(username))
    // .then(userData => console.log('Data coming from the server are ', userData))
    // .catch(e => console.log(e));
    try {
      const passowrd = await getUserPassword(0.5);
      await login(passowrd);
      const userData = await getUserData(username);
      console.log(userData);
    } catch (error) {
      console.log(error, username);
    }

  }
  // (async () => await funStackExample('Vasya'))(); // הגדרת פונקציה
  
  //Print out the message "Data processed only after finishing both functions"
  const promise1 = funStackExample('Vasya');
  const promise2 = funStackExample('Petya');
  //funStackExample('Vasya').then(() => funStackExample('Hana')); // making vasya always go first and then hana
  console.log("waiting for the data coming from the server...");
  //Promise.all([promise1, promise2]).then(() => console.log("data processed")); // working by order in the array of promises given,
  //  and after all finished, prints data processed
  Promise.race([promise1, promise2]).then(() => console.log("data processed")); // the first to finish is the first to print,
  //  data processed will be printed after 1 finishes