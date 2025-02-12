import User from './1-riccirpb-crud.js';

function createUser(username, age, password, createdAt = null) {
    return new User(username,age,password,createdAt);
}
