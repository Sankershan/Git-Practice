function login(username, password) {
    if (!username || !password) {
        return "Invalid Credentials";
    }

    return "Login Successful";
}

module.exports = login;