import express from "express"
import 'dotenv/config' 
import { conectarDB } from "../db/db.js"
import cors from "cors"
conectarDB()
const servidor = express()
//const __filename = fileURLToPath(import.meta.url)
//const __dirname = dirname(__filename)
//servidor.use(express.static(`${__dirname}/dist`));

servidor.set("port", process.env.PORT || 80)
servidor.listen(servidor.get("port"))
servidor.use (express.json())
servidor.use(cors())
export {
    servidor
}