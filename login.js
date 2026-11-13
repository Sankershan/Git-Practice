function login(username, password) {
    if (!username || !password) {
        return "Invalid Credentials";
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters";
    }

    return "Login Successful";
}

module.exports = login;