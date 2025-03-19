function getUserPassword(probCorrectPass){
    const passwords = ['correct','wrong'];
    const index =  Math.random() < probCorrectPass ? 0 : 1;
    return new Promise(resolve => {
        setTimeout(() =>resolve(passwords[index]))
    })
}


function login(password) {
    //TO Do
    //returns promise in the state resolved only for password 'correct' otherwise state rejected
    return new Promise((resolve, reject)=> {
        if(password == 'correct'){
            resolve('Login successful');
        }
        else{
            reject('wrong credentials');
        }
    })
}
function getUserData(username){
    //TO DO
    //returns promise in the state resolved if username exists with returning user data
    //otherwise state rejected with apropriate message "username doesn't exist"
    return new Promise((resolve, reject)=> {
    const users = {'Vasya' : {name: "Vasya", age: 30}, 'Petya': {name: "Petya", age: 40}}
    if (users[username]){
        resolve(`welcome ${username}`);
    }
    else if (!users[username]){
        throw `username ${username} doesn't exist`;
    }
    }
   
}

function funStackExample(username){
    try{
        const password = await(getUserPassword(0.8));
        login(password);
        const userData = await(getUserData(username));
        console.log(userData);
    }
    catch (error){
        console.log(`error ${error}`);
    }
}
//runs the same functionality but with calling asynchronous functions

funStackExample('Sara');