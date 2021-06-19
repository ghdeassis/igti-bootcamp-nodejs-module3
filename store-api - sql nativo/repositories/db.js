import pg from "pg";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://iiusoxuk:G-YgoynyaaHPdK2K9W_8yeY_3z2491AG@queenie.db.elephantsql.com/iiusoxuk"
    });
    global.connection = pool;
    
    return pool.connect();
}

export {
    connect
}