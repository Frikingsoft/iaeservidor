import mongoose from "mongoose"
const conectarDB = async () =>{
await mongoose.connect(process.env.db)
    .then(() => {
      console.log('Conectado a la base de datos BDIAE');
    })
    .catch((error) => {
      console.error('Error al conectar a la base de datos:', error);
    })
}

export {
    conectarDB
}