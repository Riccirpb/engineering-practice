function updateUser(username, age) {
    const nombreDeUsuario = getUserByUsername(username);

    nombreDeUsuario.age = age;
        
}