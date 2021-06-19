import Supplier from "../models/supplier.model.js";

async function insertSupplier(supplier) {
    try {
        return await Supplier.create(supplier);
    } catch (err) {
        throw err;
    }
}

async function getSuppliers() {
    try {
        return await Supplier.findAll();
    } catch (err) {
        throw err;
    }
}

async function getSupplier(id) {
    try {
        return await Supplier.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function deleteSupplier(id) {
    try {
        await Supplier.destroy({
            where: {
                supplierId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function updateSupplier(supplier) {
    try {
        await Supplier.update(supplier, {
            where: {
                supplierId: supplier.supplierId
            }
        });
        return await getSupplier(supplier.supplierId);
    } catch (err) {
        throw err;
    }
}

export default {
    insertSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier
}
