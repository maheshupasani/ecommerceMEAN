const Mysqli = require('mysqli');

let conn = new Mysqli({
    host: 'localhost',
    port: 3306,
    user: 'root',
    passwd: 'Password!123',
    db: 'ecommerce'
});

let db = conn.emit(false,'ecommerce')

module.exports = {
    database: db
}