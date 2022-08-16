const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById
} = require('../../controllers/userControllers');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = router; 

// Not sure how to get the thoughts and friends data 