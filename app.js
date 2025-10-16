const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const sequelize = require('./config/database');
const logger = require('./middleware/logger');
const mainRoutes = require('./routes/mainRoutes');
const mailRoutes = require('./routes/mailRoutes');

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/assets', express.static(path.join(__dirname, 'public/html/skillgro/assets')));

app.use('/', mainRoutes);
app.use('/api/mail', mailRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected.');
        await sequelize.sync({ alter: true });
        console.log('✅ Models synchronized.');

        app.listen(port, '0.0.0.0', () => {
            console.log(`🚀 Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('❌ DB Error:', error);
    }
})();
