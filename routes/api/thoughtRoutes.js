const router = require('express').Router();

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

module.exports = router;
