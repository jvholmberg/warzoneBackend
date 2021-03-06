var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	CategoryModel = mongoose.model('Category');

module.exports = function(app) {
	app.use('/category', router);
};

/* Create new Category
==============================================================================*/
router.route('/create')
	.post(function(req, res) {
		console.log(req.body);
		var category = new CategoryModel(req.body);
		category.save(function(err) {
			if (err) return next(err);
			res.send(category);
		});
	});

/* Update Category
==============================================================================*/
router.route('/update')
	.post(function(req, res) {
		console.log(req.body);
		CategoryModel.findById(req.body._id, function(err, category) {
			if (err) return next(err);
			for (var property in category) {
				if (req.body.hasOwnProperty(property) && property !== '_id') {
					category[property] = req.body[property];
				}
			}
			category.save(function(err, data) {
				res.send(data);
			});
		});
	});
/* Get all Categories
==============================================================================*/
router.route('/all')
	.post(function(req, res) {
		console.log(req.body);
		var category = CategoryModel.find(function(err, categories, count) {
			res.send(categories);
		});
	});

/* Delete Category
==============================================================================*/
router.route('/delete')
	.post(function(req, res) {
		console.log(req.body);
		CategoryModel.findById(req.body._id).remove(function(err, category, count) {
			if (err) return next(err);
			res.send(category);
		});
	});
