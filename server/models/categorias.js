const mongoose = require('mongoose');
//esta variable debe llamrse asi pilas :)

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    nombre: {
        type: String,
        require: [true,'el nombre es requerido']

    },
});

module.exports = mongoose.model('Categoria',categoriaSchema);