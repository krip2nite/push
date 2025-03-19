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
    const timeout = 2000;
    return new Promise((resolve, reject)=> {
        if(password == 'correct'){
            resolve(console.log('Login successful'), timeout);
        }
        else{
            reject('wrong credentials');
        }
    })
}
function getUserData(username, password){
    //TO DO
    //returns promise in the state resolved if username exists with returning user data
    //otherwise state rejected with apropriate message "username doesn't exist"
    const timeout = 1000;
    return new Promise(async(resolve, reject)=> {
    const users = {'Vasya' : {name: "Vasya", age: 30}, 'Petya': {name: "Petya", age: 40}}
    if (users[username]){
        await login(password);
        resolve(`welcome ${username}`, timeout);
    }
    else if (!users[username]){
        reject();
    }
    }).catch(error => {console.log(`username ${username} doesn't exist`);});
}


async function funStackExample(username){
    try{
        const password = await getUserPassword(0.8);
        const userData = await getUserData(username, password);
        if (userData != undefined)
            console.log(userData);
    }
    catch (error){
        console.log(`error ${error}`);
    }
}

funStackExample('Sara');
funStackExample('Vasya');