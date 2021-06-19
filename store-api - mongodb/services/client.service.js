import ClientRepository from "../repositories/client.repository.js";

async function createClient(client) {
    return await ClientRepository.insertClient(client);
}

async function getClients() {
    return await ClientRepository.getClients();
}

async function getClient(id) {
    return await ClientRepository.getClient(id);
}

async function deleteClient(id) {
    await ClientRepository.deleteClient(id);
}

async function updateClient(client) {
    return await ClientRepository.updateClient(client);
}

export default {
    createClient,
    getClients,
    getClient,
    deleteClient,
    updateClient
}