const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/', ProductController.createProduct);
    app.get('/', ProductController.getAllProduct);
    app.get('/:id', ProductController.getProduct);
    app.put('/:id/edit', ProductController.updateProduct);
    app.delete('/:id', ProductController.deleteProduct);
}
