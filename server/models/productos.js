const mongoose = require('mongoose');
//esta variable debe llamrse asi pilas :)

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: {
        type: String,
        require: [true,'el nombre es requerido']

    },
    precioUni:{
        type: String,
        require: [true,'el correo es requerido']
    },
    disponible: {
        type : Boolean,
        default : true
    }
});

module.exports = mongoose.model('Producto',productoSchema);