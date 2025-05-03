const User = require('../models/User');

// Tüm kullanıcıları getir
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password'); // Şifreleri hariç tut
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Kullanıcılar getirilirken hata oluştu' });
    }
};

// Kullanıcı sil
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
        res.json({ message: 'Kullanıcı başarıyla silindi' });
    } catch (error) {
        res.status(500).json({ message: 'Kullanıcı silinirken hata oluştu' });
    }
};

module.exports = {
    getAllUsers,
    deleteUser
};
