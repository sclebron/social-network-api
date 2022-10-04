const router = require('express').Router();
const {
    getUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUsers);
router.route('/:id').get(getUserById);
router.route('/').post(postUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);

module.exports = router;