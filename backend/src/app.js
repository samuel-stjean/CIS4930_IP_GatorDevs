require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const gameRoutes = require('./routes/gameRoutes');
app.use('/api', gameRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
