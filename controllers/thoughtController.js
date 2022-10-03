const { Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .sort({createdAT: -1})
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
    getThoughtbyId(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .then((dbThoughtData) => 
                !(dbThoughtData)
                    ? res.status(404),json({message: 'No thought with this Id found'})
                    : res.json(dbThoughtData)
            )
            .catch((err) => res.status(500).json(err));
    },
    postThought(req, res) {
        Thought.create(req.body) 
        .then(({dbThoughtData}) => { return User.findOneAndUpdate(
            {_id: req.body.userId},
            {$push: {thoughts: dbThoughtData._id} },
            {new: true}
        );
    })
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate({_id: req.params.thoughtId})
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.status(500).json(err));
    }
};