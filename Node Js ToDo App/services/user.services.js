const UserModel = require('../models/user.model');

class UserService {
    static async registerUser(email, password) {
        try {
            const createUser = new UserModel({ email, password });
            return await createUser.save(); // Add return statement here
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserService;
