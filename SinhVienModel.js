const mongoose = require('mongoose');

const SinhVienSchema = new mongoose.Schema ({
    ten: {
        type: String,
    },
    lop: {
        type: String,
    },
    diemTB: {
        type: Number
    }
});

const SinhVienModel = new mongoose.model('sinhvien', SinhVienSchema);

module.exports = SinhVienModel;