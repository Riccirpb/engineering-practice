class User {   
    constructor(username, age, password, createdAt = null) {
        this.username = username;
        this.age = age;
        this.password = password;
        this.createdAt = createdAt ? new Date(createdAt): new Date();
    }
  }