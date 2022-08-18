const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend
} = require('../../controllers/userControllers.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = router;

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
