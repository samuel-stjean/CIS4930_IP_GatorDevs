const db = require('../../db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS plants (id INTEGER PRIMARY KEY, name TEXT, health INTEGER)");
    db.run("CREATE TABLE IF NOT EXISTS critters (id INTEGER PRIMARY KEY, name TEXT, hunger INTEGER)");
});

module.exports = db;
