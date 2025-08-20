import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Menentukan __dirname di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Melayani file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.render('index');
});

// Route untuk halaman about
app.get('/about', (req, res) => {
    res.render('testabout');
});

// Route untuk halaman contact
app.get('/contact', (req, res) => {
    res.send('<h1>Ini adalah halaman Contact</h1>');
});

// Route untuk halaman personal
app.get('/personal', (req, res) => {
    res.send('<h1>Ini adalah Halaman Personal</h1>');
});

// Route untuk product dengan parameter ID dan query category
app.get('/product/:id/category', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.idCat}`);
});

// Handle error 404
app.use((req, res) => {
    res.status(404).send('<h1>page not found</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server Running at port https://localhost:${PORT}`);
});
