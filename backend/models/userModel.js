const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    /////////////// Información personal ///////////////////
    identification_type: {
        type: String,
        required: [true, 'Por favor seleccione tipo de documento'],
    },
    identification: {
        type: String,
        required: [true, 'Por favor ingrese número de identificación'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Por favor ingrese su nombre']
    },
    lastname: {
        type: String,
        required: [true, 'Por favor ingrese su primer apellido']
    },
    sec_lastname: {
        type: String
    },
    ////////////// Información general ///////////////////
    date_of_birth: {
        type: String,
        required: [true, 'Por favor ingrese su fecha de nacimiento']
    },
    gender: {
        type: String,
        required: [true, 'Por favor seleccione su género']
    },
    blood_type: {
        type: String,
        required: [true, 'Por favor seleccione su tipo de sangre']
    },
    rh: {
        type: String,
        required: [true, 'Por favor seleccione su rh']
    },
    marital_status: {
        type: String
    },
    EPS: {
        type: String,
        required: [true, 'Por favor seleccione su EPS']
    },
    ////////////// Datos de localización ///////////////////
    home_phone: {
        type: String
    },
    mobile_phone: {
        type: String
    },
    work_phone: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    department: {
        type: String
    },
    ////////////// Información de la sesión ///////////////////
    /* rol: {
         type: mongoose.Schema.Types.ObjectId, ref: 'roles',
         required: true
     },  */

     role: {
        type: String,
        required: [true, 'Por favor seleccione su rol'],
        default: "patient",
        enum: ["Admin", "Medico", "Empleado", "Paciente"]
    },
    email: {
        type: String,
        required: [true, 'Por favor ingrese su correo electrónico'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Por favor ingrese una contraseña']
    },
    ////////////// Información de contacto ///////////////////
    contact_name: {
        type: String
    },
    contact_lastname: {
        type: String
    },
    contact_sec_lastname: {
        type: String
    },
    contact_relationship: {
        type: String
    },
    contact_phone: {
        type: String
    },

    ////////////////////////////////////////////
    last_login_date: {
        type: Date,
        default: Date.now()
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)