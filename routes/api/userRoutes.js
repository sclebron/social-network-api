const router = require('express').Router();
const {
    getUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');
// console.log(getUsers)

router.route('/').get(getUsers);
router.route('/:id').get(getUserById);
router.route('/').post(postUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);
router.route('/:id/friends/:friendId').post(addFriend);
router.route('/:id/friends/:friendId').delete(deleteFriend);

module.exports = router;