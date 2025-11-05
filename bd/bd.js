
import mongoose from "mongoose"
import 'dotenv/config'

export async function conectarBD(){//Conectamos nuestra base de datos de mongo
	try{
		console.log("-----AKJHDKHFKJAHFKJ----")
		const conexion = await mongoose.connect(process.env.SECRET_MONGO);
		//CONEXION LOCAL const conexion = mongoose.connect("mongodb://localhost:27017/(nombre de la aplicacion)")
		console.log("conexion establecida con mongo atlas")
	}
	catch(err){
		console.log("ERROR"+err)
	}
	
}

//Mandamos llamar a nuestra funcion
//conectarBD()
//AWAIT: nos sirve para  decir que espere, pero debemod poner async a nuestra funcion