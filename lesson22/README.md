# Transform the methods getUserPassword, login, getUserData to asynchronous function
## all these functions should return promises
### getUserPassword returns promise that moves to resolved state after 1 second with resolved call taking the password
#### login returns promise in the state resolved in 2 seconds if password is 'correct' 
#### otherwise promise in the state rejected with apropriate message "incorrect password"
##### getUserData returns promise in the state resolved in 1 second if username exists
##### otherwise promise in the state rejected with apropriate message "username doesn't exist"
###### funStackExample takes username, call asynchronous getUsername, then call asynchronous login,
###### then call asynchronous getUserData and then print out user data.
###### if there is some Promise in the state rejected (catch) the apropriate message should be printed.