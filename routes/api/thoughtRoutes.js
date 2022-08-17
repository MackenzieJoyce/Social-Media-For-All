const router = require('express').Router();

//-----THOUGHTS 
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
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

//-----REACTIONS 
const {
  createReaction,
  deleteReactionById
} = require('../../controllers/thoughtController');

// /api/reactions
router.route('/').post(createReaction);

// /api/reactions/:reactionId
router.route('/:reactionId').delete(deleteReactionById);

module.exports = router;
