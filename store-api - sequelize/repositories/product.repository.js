import Product from "../models/product.model.js";

async function insertProduct(product) {
    try {
        return await Product.create(product);
    } catch (err) {
        throw err;
    }
}

async function getProducts() {
    try {
        return await Product.findAll();
    } catch (err) {
        throw err;
    }
}

async function getProduct(id) {
    try {
        return await Product.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function deleteProduct(id) {
    try {
        await Product.destroy({
            where: {
                productId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function updateProduct(product) {
    try {
        await Product.update(product, {
            where: {
                productId: product.productId
            }
        });
        return await getProduct(product.productId);
    } catch (err) {
        throw err;
    }
}

export default {
    insertProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}
