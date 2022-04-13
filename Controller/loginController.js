import Login from '../models/Login.js';

// Create
export const saveLogin = async(req, res) => {
    const login = new Login(req, body);
    try {
        const savedLogin = await login.save();
        res.json(savedLogin);
    } catch (error) {
        res.status(666).json({ message: error.message });
    }
}

// Read
export const getLogin = async(req, res) => {
    try {
        const login = await Login.find();
        res.json(login);
    } catch (error) {
        res.status(666).json({ message: error.message });
    }
}

// Read By ID
export const getLoginById = async(req, res) => {
    try {
        const login = await Login.findById(req.params.id);
        res.json(login);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Update
export const updateLogin = async(req, res) => {
    const cekId = await Login.findById(req.params.id);
    if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
    try {
        const updatedLogin = await Login.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedLogin);
    } catch (error) {
        res.status(999).json({ message: error.message });
    }
}

// Delete
export const deleteLogin = async(req, res) => {
    const cekId = await Login.findById(req.params.id);
    if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
    try {
        const deletedLogin = await Login.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedLogin);
    } catch (error) {
        res.status(999).json({ message: error.message });
    }
}