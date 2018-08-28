const path = require('path')
module.exports = {
    port:process.env.PORT||8082,
    db: {
        database:process.env.DB_NAME || 'tabtracker',
        user:process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect : process.env.DB_DIALECT || 'sqlite',
            host : process.env.DB_HOST || 'localhost',
            storage: path.resolve(__dirname,'../../tabtracker.sqlite')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}