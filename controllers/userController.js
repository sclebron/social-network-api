const { User, Thought } = require('../models');

module.exports = {
    //get all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    //get a single user by its id, to do - populate thought and friend data
    getUserById(req, res) {
        User.findONe({_id: req.params.userId})
            .select('-__v')
            .then((user) => 
                !user
                    ? res.status(404),json({message: 'No user with this Id found'})
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //post a new user
    postUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    //to do - put to update a user by its id and delete to remove a user by its id
};