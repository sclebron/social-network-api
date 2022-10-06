const { User, Thought } = require('../models');

module.exports = {
    getThoughts: async (req, res) => {
        try {
            const dbThoughtData = await Thought.find({})
            console.log(dbThoughtData)
        res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    getThoughtById: async (req, res) => {
        try {
            const dbThoughtData = await Thought.findOne({_id: req.params.thoughtId})
            console.log(dbThoughtData)
        res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    
    postThought: async (req, res) => {
        try {
            const dbThoughtData = await Thought.create(req.body) 
            const updateUser = await User.findOneAndUpdate(
                {username: req.body.username},
                {$push: {thoughts: dbThoughtData._id} },
                {new: true}
            )
            res.status(200).json(updateUser)
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    
    updateThought: async (req, res) => {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate({_id: req.params.thoughtId})
            console.log(dbThoughtData)
        res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    deleteThought: async (req, res) => {
        try {
            const dbThoughtData = await Thought.findOneAndDelete({_id: req.params.ThoughtId})
            console.log(dbThoughtData)
        res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },


    addReaction: async (req, res) => {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$push: {reactions: req.body}}, {new: true})
            console.log(dbThoughtData)
        res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    deleteReaction: async (req, res) => {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new: true})
            console.log(dbThoughtData)
        res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
};

    
    // getThoughts(req, res) {
    //     Thought.find()
    //     .then((dbUserData) => res.json(dbUserData))
    //     .catch((err) => res.status(500).json(err));
    // },
    // getThoughtById(req, res) {
    //     Thought.findOne({_id: req.params.thoughtId})
    //     .then((dbThoughtData) => 
    //             !(dbThoughtData)
    //                 ? res.status(500).json({message: 'No thought with this Id found'})
    //                 : res.json(dbThoughtData)
    //         )
    //         .catch((err) => res.status(500).json(err));
    // },
    // postThought: async (req, res) => {
    //     try {
    //         const dbThoughtData = await Thought.create(req.body) 
    //         const updateUser = await User.findOneAndUpdate(
    //             {username: req.body.username},
    //             {$push: {thoughts: dbThoughtData._id} },
    //             {new: true}
    //         )
    //         res.status(200).json(updateUser)
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).json(err);
    //     }
    // },
    // updateThought(req, res) {
    //     Thought.findOneAndUpdate({_id: req.params.thoughtId})
    //     .then((dbThoughtData) => res.json(dbThoughtData))
    //     .catch((err) => res.status(500).json(err));
    // },
    // deleteThought(req, res) {
    //     Thought.findOneAndDelete({_id: req.params.thoughtId})
    //     .then((dbThoughtData) => res.json(dbThoughtData))
    //     .catch((err) => res.status(500).json(err));
    // },
    // addReaction(req, res) {
    //     Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$push: {reactions: req.body}}, {new: true}
    //     )
    //     .then((dbThoughtData) => 
    //             !(dbThoughtData)
    //                 ? res.status(500).json({message: 'No thought with this Id found'})
    //                 : res.json(dbThoughtData)
    //         )
    //         .catch((err) => res.status(500).json(err));
    // },
    // deleteReaction(req, res) {
    //     Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new: true}
    //     )
    //     .then((dbThoughtData) => res.json(dbThoughtData))
    //     .catch((err) => res.status(500).json(err));
    // }