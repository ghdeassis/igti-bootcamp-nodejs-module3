import SupplierService from "../services/supplier.service.js";

async function createSupplier(req, res, next) {
    try {
        let supplier = req.body;
        if (!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address) {
            throw new Error("Name, CNPJ, Phone, Email e Address são obrigatórios.");
        }        
        supplier = await SupplierService.createSupplier(supplier);
        res.send(supplier);
        logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
    } catch (err) {
        next(err);
    }
}

async function getSuppliers(req, res, next) {
    try {
        res.send(await SupplierService.getSuppliers());
        logger.info("GET /supplier");
    } catch (err) {
        next(err);
    }
}

async function getSupplier(req, res, next) {
    try {
        res.send(await SupplierService.getSupplier(req.params.id));
        logger.info("GET /supplier");
    } catch (err) {
        next(err);
    }
}

async function deleteSupplier(req, res, next) {
    try {
        await SupplierService.deleteSupplier(req.params.id)
        res.end();
        logger.info("DELETE /supplier");
    } catch (err) {
        next(err);
    }
}

async function updateSupplier(req, res, next) {
    try {
        let supplier = req.body;
        if (!supplier.supplier_id || !supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address) {
            throw new Error("Supplier ID, Name, CNPJ, Phone, Email e Address são obrigatórios.");
        }        
        supplier = await SupplierService.updateSupplier(supplier);
        res.send(supplier);
        logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}