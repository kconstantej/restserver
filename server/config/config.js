//========================
// Puerto
// =======================
process.env.PORT = process.env.PORT || 3000;
//========================
// Base de Datos
// =======================
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB= 'mongodb://localhost:27017/cafe';
}else{
    urlDB='mongodb+srv://admin:XQXN3azYEdZ0Yo8r@cluster0-q9zgn.mongodb.net/cafe';
};

process.env.URLDB = urlDB;