require('dotenv').config()

const dbConfig = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    server: process.env.DATABASE_HOST,
    options: {
        encrypt: true,
        // trustedConnection: true,
        // enableArithAbort: true,
        trustServerCertificate: true,
    },
    pool: {
        max: 10,
        min: 0,
        evictionRunIntervalMillis: 10000,
        // softIdleTimeoutMillis: 30000,
        // idleTimeoutMillis: 30000,
        // testOnBorrow: true,
        // acquireTimeoutMillis: 20000,
    }

}

module.exports = {dbConfig};