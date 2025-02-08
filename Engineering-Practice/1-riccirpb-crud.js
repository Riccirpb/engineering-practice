class User {   
    constructor(username, age, createdAt = null) {
        this.username = username;
        this.age = age;
        this.createdAt = createdAt ? new Date(createdAt): new Date();
    }
  }