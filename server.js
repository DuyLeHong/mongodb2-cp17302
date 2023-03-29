
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');

const uri = 'mongodb+srv://duylh17:password@cluster0.0n8qgpd.mongodb.net/cp17302?retryWrites=true&w=majority';

const SinhVienModel = require('./SinhVienModel');

app.get('/', async (req, res) => {
    await mongoose.connect(uri);
    console.log('Ket noi DB thanh cong');

    let arrSv = await SinhVienModel.find();

    for (let i=0; i< arrSv.length; i++) {
        let sv = arrSv[i];
        console.log(`Sinh vien thu ${i + 1}:`);
        console.log(`tenSV: ${sv.ten}, lop: ${sv.lop}`)
    }
    res.send(arrSv);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

