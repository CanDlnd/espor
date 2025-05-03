require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/db');

const createAdmin = async () => {
    try {
        await connectDB();

        const adminData = {
            username: 'admin',
            email: 'admin@espor.com',
            password: 'admin123',
            role: 'admin'
        };

        // E-posta adresine göre admin var mı kontrol et
        const existingAdmin = await User.findOne({ email: adminData.email });
        
        if (existingAdmin) {
            console.log('Admin kullanıcısı zaten mevcut!');
            process.exit(0);
        }

        const admin = await User.create(adminData);
        console.log('Admin kullanıcısı oluşturuldu:', admin);
        process.exit(0);
    } catch (error) {
        console.error('Hata:', error);
        process.exit(1);
    }
};

createAdmin();
