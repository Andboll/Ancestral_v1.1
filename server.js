const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta raíz del proyecto
app.use(express.static(path.join(__dirname)));

// Rutas para las páginas HTML
app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'inicio.html'));
});

app.get('/historia', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'historia.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'productos.html'));
});

app.get('/recetas', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'recetas.html'));
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});
