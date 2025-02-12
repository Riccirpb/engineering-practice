# engineering-practice 

User CRUD

1) Define a class User that have the following attributes: username, age, password, createdAt.

2) Write a function createUser(username:string, age: number) that takes username and password and return a user Object with { username, password, createdAt } where created at is the current date.

3) Create an array of  `User` with some users in it.

4) Write a function `listAdultUsers()` that returns all the users from the array where it’s age >= 18.

5) create a function `getUserByUsername(username: string)` that should return a user with the given username. Username is case insensitive, so if the username  is: “Nachito123” the following options should be accepted: “nachito123”, “NACHITO123”, “nAcHiTo123”.

6) Write a function `deleteUserByUsername(username: string)` that should remove the user from the previously created list, if the user does not exists it should throw an error “User not found”.

7) Write a function updateUser(username: string, age: number) that should find a user by username an update it’s age, it should throw an error if the user is not found. user search is case insensitive so you can reuse the function made in point 5.
