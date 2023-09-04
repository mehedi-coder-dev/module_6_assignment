
const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');


// Routes for blogController
router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete);
router.get('/blog/update', blogController.update);

// Routes for blogDetailsController
router.get('/blogDetails/create', blogDetailsController.create);
router.get('/blogDetails/read', blogDetailsController.read);
router.get('/blogDetails/delete', blogDetailsController.delete);
router.get('/blogDetails/update', blogDetailsController.update);

// Routes for commentController
router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/delete', commentController.delete);
router.get('/comment/update', commentController.update);

// Routes for messageController
router.get('/message/create', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/delete', messageController.delete);
router.get('/message/update', messageController.update);

// Routes for portfolioController
router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/delete', portfolioController.delete);
router.get('/portfolio/update', portfolioController.update);

// Routes for productController
router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/delete', productController.delete);
router.get('/product/update', productController.update);

// Routes for profitController
router.get('/profit/create', profitController.create);
router.get('/profit/read', profitController.read);
router.get('/profit/delete', profitController.delete);
router.get('/profit/update', profitController.update);

// Routes for projectController
router.get('/project/create', projectController.create);
router.get('/project/read', projectController.read);
router.get('/project/delete', projectController.delete);
router.get('/project/update', projectController.update);

// Routes for serviceController
router.get('/service/create', serviceController.create);
router.get('/service/read', serviceController.read);
router.get('/service/delete', serviceController.delete);
router.get('/service/update', serviceController.update);

// Routes for titleController
router.get('/title/create', titleController.create);
router.get('/title/read', titleController.read);
router.get('/title/delete', titleController.delete);
router.get('/title/update', titleController.update);



module.exports = router;
