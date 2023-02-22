const mongoose = require('mongoose');


const dbs = `mongodb+srv://muhammadasghar:cyubFOoEa6ODx2Oy@cluster0.pfkrnew.mongodb.net/demodatabase?retryWrites=true&w=majority`

const db = () => {
    mongoose.set('strictQuery', false)
    mongoose
    .connect(dbs)
    .then((res) => console.log('Database connected successfully'))
    .catch(err => console.log('Database Not Connected'))

}

module.exports = db;