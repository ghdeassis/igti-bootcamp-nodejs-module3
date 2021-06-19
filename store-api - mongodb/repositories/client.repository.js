import Client from "../models/client.model.js";

async function insertClient(client) {
    try {
        return await Client.create(client);
    } catch (err) {
        throw err;
    }
}

async function getClients() {
    try {
        return await Client.findAll();
    } catch (err) {
        throw err;
    }
}

async function getClient(id) {
    try {
        return await Client.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function deleteClient(id) {
    try {
        await Client.destroy({
            where: {
                clientId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

async function updateClient(client) {
    try {
        await Client.update(client, {
            where: {
                clientId: client.clientId
            }
        });
        return await getClient(client.clientId);
    } catch (err) {
        throw err;
    }
}

export default {
    insertClient,
    getClients,
    getClient,
    updateClient,
    deleteClient
}
