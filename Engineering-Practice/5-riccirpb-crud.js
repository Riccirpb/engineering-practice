function getUserByUsername(username) {
    const nombreDeUsuario = users.find(user => user.username.toLowerCase() === username.toLowerCase());

    if (nombreDeUsuario) {
        return nombreDeUsuario;
    }
    return null;
}