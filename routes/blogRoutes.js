// Our router module
const router = require('express').Router();

// Our controller
const blogsController = require('../controllers/blogsController');

// Our routes
router.get(`/new`, blogsController.new);
router.get(`/drafts`, blogsController.drafts);
router.get(`/published`, blogsController.published);
router.get(`/`, blogsController.index);
router.get(`/:id`, blogsController.show);
router.post(`/`, blogsController.create);

// We have to export our changes
module.exports = router;