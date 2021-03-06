var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CategorySchema = new Schema({
  parentCategory: String,
  title: String,
  description: String
});

CategorySchema.virtual('date')
  .get(function() {
    return this._id.getTimestamp();
  });

mongoose.model('Category', CategorySchema);
