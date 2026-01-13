const User = require('../models/user');
const userService = require('../services/userService');

class UserController {
    getAllUsers(req, res) {
        const users = userService.getAllUsers();
        res.json(users);
    }

    getUserById(req, res) {
        const id = parseInt(req.params.id, 10);
        const user = userService.getUserById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    createUser(req, res) {
        const { id, name, email } = req.body;
        const newUser = new User(id, name, email);
        const createdUser = userService.createUser(newUser);
        res.status(201).json(createdUser);
    }

   
}

module.exports = new UserController();