import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from "../repositories/sale.repository.js";

async function createProduct(product) {
    if (await SupplierRepository.getSupplier(product.supplierId)) {
        return await ProductRepository.insertProduct(product);
    }
    throw new Error("O supplier_id informado não existe.");
}

async function getProducts() {
    return await ProductRepository.getProducts();
}

async function getProduct(id) {
    return await ProductRepository.getProduct(id);
}

async function deleteProduct(id) {
    const sales = await SaleRepository.getSalesByProductId(id);
    if (sales.length > 0) {
        throw new Error("Não é possível excluir o produto pois ele tem vendas.")
    }
    await ProductRepository.deleteProduct(id);
}

async function updateProduct(product) {
    if (await SupplierRepository.getSupplier(product.supplier_id)) {        
        return await ProductRepository.updateProduct(product);
    }
    throw new Error("O supplier_id informado não existe.");
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}