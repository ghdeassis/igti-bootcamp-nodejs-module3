import ProductService from "../services/product.service.js";

async function createProduct(req, res, next) {
    try {
        let product = req.body;
        if (!product.name || !product.description || !product.value || !product.stock || !product.supplierId) {
            throw new Error("Name, Description, Value, Stock e Supplier ID são obrigatórios.");
        }        
        product = await ProductService.createProduct(product);
        res.send(product);
        logger.info(`POST /product - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

async function getProducts(req, res, next) {
    try {
        res.send(await ProductService.getProducts());
        logger.info("GET /product");
    } catch (err) {
        next(err);
    }
}

async function getProduct(req, res, next) {
    try {
        res.send(await ProductService.getProduct(req.params.id));
        logger.info("GET /product");
    } catch (err) {
        next(err);
    }
}

async function deleteProduct(req, res, next) {
    try {
        await ProductService.deleteProduct(req.params.id)
        res.end();
        logger.info("DELETE /product");
    } catch (err) {
        next(err);
    }
}

async function updateProduct(req, res, next) {
    try {
        let product = req.body;
        if (!product.productId || !product.name || !product.description || !product.value || !product.stock || !product.supplier_id) {
            throw new Error("Product ID, Name, Description, Value, Stock e Supplier ID são obrigatórios.");
        }        
        product = await ProductService.updateProduct(product);
        res.send(product);
        logger.info(`PUT /product - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

async function createProductInfo(req, res, next) {
    try {
        let productInfo = req.body;
        if (!productInfo.productId) {
            throw new Error("Product ID é obrigatório.");            
        }
        await ProductService.createProductInfo(productInfo);
        res.end();
        logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);        
    } catch (err) {
        next(err);
    }
}

async function updateProductInfo(req, res, next) {
    try {
        let productInfo = req.body;
        if (!productInfo.productId) {
            throw new Error("Product ID é obrigatório.");            
        }
        await ProductService.updateProductInfo(productInfo);
        res.end();
        logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);        
    } catch (err) {
        next(err);
    }
}

async function createReview(req, res, next) {
    try {
        let params = req.body;
        if (!params.productId || !params.review) {
            throw new Error("Product ID e Review são obrigatórios.");
        }
        await ProductService.createReview(params.review, params.productId);
        logger.info(`POST /product/review`);
        res.end();
    } catch (err) {
        next(err);
    }
}

async function deleteReview(req, res, next) {
    try {
        await ProductService.deleteReview(req.params.id, req.params.index);
        logger.info(`DELETE /product/${req.params.id}/review/${req.params.index}`);
        res.end();
    } catch (err) {
        next(err);
    }
}

async function getProductsInfo(req, res, next) {
    try {
        res.send(await ProductService.getProductsInfo());
        logger.info("GET /product/info");
    } catch (err) {
        next(err);
    }
}

async function deleteProductInfo(req, res, next) {
    try {
        res.send(await ProductService.deleteProductInfo(parseInt(req.params.id)));
        logger.info("DELETE /product/info");
    } catch (err) {
        next(err);
    }
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    createProductInfo,
    updateProductInfo,
    createReview,
    deleteReview,
    getProductsInfo,
    deleteProductInfo
}