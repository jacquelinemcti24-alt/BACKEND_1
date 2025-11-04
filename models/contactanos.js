import mongoose from "mongoose"
//Clase que nos la recomienda mongoose(le llma esquema)
const contactanosSchema = new mongoose.Schema({
	nombre:{
		type: String,
		required: true,
		trim: true, //Nos ayuda a borrar los espacios que se lleguen a poner a la hora de llenar el formulario
		unique: false
	},
	edad:{
		type: Number,
		required: true,
		trim: true, //Nos ayuda a borrar los espacios que se lleguen a poner a la hora de llenar el formulario
		unique: false //Se establece ya que el valor se repite muchas veces
	}
})

export default mongoose.model("contactanos", contactanosSchema)
