const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./critterkeeper.db', (err) => {
    if (err) console.error('Database Connection Error:', err);
    else console.log('Connected to SQLite Database.');
});

module.exports = db;
