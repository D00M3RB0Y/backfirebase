const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
require('dotenv/config')

// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración claves firebase
const firebaseConfig = {
    apiKey: "AIzaSyCPWW5A0UcgLV9OduhJOujuT0brxq8I_gk",
    authDomain: "proyecto5a-74083.firebaseapp.com",
    projectId: "proyecto5a-74083",
    storageBucket: "proyecto5a-74083.appspot.com",
    messagingSenderId: "227660382520",
    appId: "1:227660382520:web:f54c25fb7872ecb8f241cd"
};

// Inicializar la BD
const firebase = initializeApp(firebaseConfig);
const db = getFirestore()

// Inicializar el servidor
const app = express()

// Configuración CORS
const corsOptions = {
    "Origin": "*",
    "optionSuccessStatus": 200
};

app.use(express.json())
app.use(cors(corsOptions))

// Configuración Rutas

// Ruta para Insertar un nuevo registro
app.post('/create', (req, res) => {
    const { nombre, apaterno, amaterno, direccion, telefono, ciudad, estado, email } = req.body

    // Validaciones
    if(nombre.length < 3){
        res.json({ 'alert': 'El nombre debe tener mínimo 3 caractéres' })
    }
});

// Ruta para leer todos los datos de una colección
app.get('read', (req, res) => {

});

// Ruta para actualizar un registro de una colección
app.post('/update', (req, res) => {

});

// Ruta para borrar un registro de la colección
app.post('/delete', (req, res) => {

});


// Poner servidor en escucha
const PORT = process.env.PORT || 20000

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
});