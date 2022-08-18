const router = require('express').Router();

//-----THOUGHTS 
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReactionById
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

//-----REACTIONS 
// /api/thoughts/:thoughtId/reactions 
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReactionById);

module.exports = router;
