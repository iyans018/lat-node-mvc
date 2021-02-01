const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create_get);
router.post('/create', blogController.blog_create_post);
router.get('/manage', blogController.blog_manage);
router.get('/view/:id', blogController.blog_view);
router.get('/delete/:id', blogController.blog_delete);
router.get('/update/:id', blogController.blog_update_get);
router.post('/update/:id', blogController.blog_update_post);

module.exports = router;