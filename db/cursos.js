import { mongoose } from "mongoose";
const cursoSchema = new mongoose.Schema({
    nombre: String,
    tipo: String,
    duracion: String,
    link_ingreso: String,
    modalidad: String,
    perfil: String,
    botones: [{ nombre: String }],
    flex: Number,
    imagen: String,
    horimagen1: String,
    horimagen2: String,
    horimagen3: String,
    horimagen4: String,
    horimagen5: String,
    horimagen6: String,
    horimagen7: String,
    horimagen8: String,
    horarioexam1: String,
    horarioexam2: String,
    horarioexam3: String,
    horarioexam4: String,
    horarioexam5: String,
    horarioexam6: String,
    horarioexam7: String,
    horarioexam8: String,
    link_examen: String,
    ruta: String
})

const Cursos = mongoose.model('Curso', cursoSchema)

export{
    Cursos
}
