const users = []; // In-memory storage for simplicity

class UserService {
    getAllUsers() {
        return users;
    }

    getUserById(id) {
        return users.find(user => user.id === id);
    }

    createUser(user) {
        users.push(user);
        return user;
    }

    deleteUser(id) {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            return users.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new UserService();