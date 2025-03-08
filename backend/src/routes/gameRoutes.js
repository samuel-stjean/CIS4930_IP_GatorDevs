const express = require('express');
const router = express.Router();
const db = require('../models/gameModel');

router.get('/plants', (req, res) => {
    db.all("SELECT * FROM plants", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

router.post('/plants', (req, res) => {
    const { name, health } = req.body;
    db.run("INSERT INTO plants (name, health) VALUES (?, ?)", [name, health], function (err) {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ id: this.lastID, name, health });
    });
});

module.exports = router;
