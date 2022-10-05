const { User, Thought } = require('../models');

module.exports = {
    //get all users
    getUsers: async (req, res) => { 
        try {
            const dbUserData = await User.find({})
            console.log(dbUserData)
        res.json(dbUserData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    //get a single user by its id
    getUserById(req, res) {
        User.findOne({_id: req.params.userId})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .then((dbUserData) => 
                !(dbUserData)
                    ? res.status(500).json({message: 'No user with this Id found'})
                    : res.json(dbThoughtData)
            )
            .catch((err) => res.status(500).json(err));
    },
    //post a new user
    postUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    //update a user by its id
    updateUser(req, res) {
            User.findOneAndUpdate({_id: req.params.userId})
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    //delete a user by its id
    deleteUser(req, res) {
            User.findOneAndDelete({_id: req.params.userId})
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    //add a friend
    addFriend(req, res) {
        User.findOneAndUpdate({_id: req.params.friendId}, {$push: {friends: params.friendsId}}, {new: true}
        )
        .then((dbUserData) => 
                !(dbUserData)
                    ? res.status(500).json({message: 'No user with this Id found'})
                    : res.json(dbUserData)
            )
            .catch((err) => res.status(500).json(err));
    },
    //delete a friend
    deleteFriend(req, res) {
        User.findOneAndUpdate({_id: req.params.friendId}, {$pull: {friends: params.friendId}}, {new: true}
        )
        .then((dbUserData) => 
            !(dbUserData)
                ? res.status(500).json({message: 'No user with this Id found'})
                : res.json(dbUserData)
        )
        .catch((err) => res.status(500).json(err));
    }
};
