const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const sequelize = require('./config/database');
const logger = require('./middleware/logger');
const mainRoutes = require('./routes/mainRoutes');
const path = require("path");

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/assets', express.static(path.join(__dirname, 'public/html/skillgro/assets')));
app.use(logger);

// Routes
// app.use('/api/users', userRoutes);
app.use('/', mainRoutes);

// Test + Sync DB
(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected.');

        await sequelize.sync({ alter: true });
        console.log('✅ Models synchronized.');

        app.listen(port, () => {
            console.log(`🚀 Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('❌ DB Error:', error);
    }
})();
