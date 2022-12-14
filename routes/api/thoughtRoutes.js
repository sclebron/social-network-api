const router = require('express').Router();
const {
    getThoughts,
    getThoughtById,
    postThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts);
router.route('/:thoughtId').get(getThoughtById);
router.route('/').post(postThought);
router.route('/:thoughtId').put(updateThought);
router.route('/:thoughtId').delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/reactionId').delete(deleteReaction);

module.exports = router;

