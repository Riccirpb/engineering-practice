function deleteUserByUsername(username) {
    const index = users.findIndex(user => user.username.toLowerCase() === username.toLowerCase());

    if (index === -1) {
        throw new Error('User not found');
    }

    users.splice(index, 1);
}