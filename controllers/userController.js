const User = require('../models/User');

// GET /api/users
exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

// GET /api/users/:id
exports.getUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

// POST /api/users
exports.createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
};

// PUT /api/users/:id
exports.updateUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    await user.update(req.body);
    res.json(user);
};

// DELETE /api/users/:id
exports.deleteUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    await user.destroy();
    res.json({ message: 'User deleted' });
};
