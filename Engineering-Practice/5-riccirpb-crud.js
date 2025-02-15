function getUserByUsername(username) {
    let nombreDeUsuario = users.find(user => user.username.toLowerCase() === username.toLowerCase());

    if (nombreDeUsuario) {
        return nombreDeUsuario;
    }
}