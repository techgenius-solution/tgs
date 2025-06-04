const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const sequelize = require('./config/database');
const logger = require('./middleware/logger');
const mainRoutes = require('./routes/mainRoutes');
const mailRoutes = require('./routes/mailRoutes'); // <-- ✅ add this

// 🧠 MIDDLEWARE
app.use(express.json()); // <-- ✅ must come before routes
app.use(express.urlencoded({ extended: true })); // <-- ✅ just in case form data is sent
app.use(express.static('public'));
app.use('/assets', express.static(path.join(__dirname, 'public/html/skillgro/assets')));
app.use(logger);

// 📁 ROUTES
app.use('/', mainRoutes);
app.use('/api/mail', mailRoutes); // <-- ✅ this is your email route

// 🛠️ TEST + DB SYNC
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
