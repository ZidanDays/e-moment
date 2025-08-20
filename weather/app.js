import fetch from "node-fetch";
import express from "express";

const app = express();
const PORT = 3000;

//set ejs sebagai template engine
app.set('view engine', 'ejs');

//Route untuk halaman utama
app.get('/', (req, res) => {
  res.send('Selamat datang di aplikasi cuaca');
});

//Route untuk api cuaca
app.get("/weather", async (req, res) => {
  //url
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Manado&appid=bdea93c9d25f81a6ccdc38bd2ef8de44&units=metric';

  try {
    const response = await fetch(url);
    const data = await response.json();

    //rendeer view dengan data cuaca
    res.render('weather', {
      kota : data.name,
      cuaca : data.weather[0].description,
      suhu : `${data.main.temp}°C`
    });
  } catch (error) {
    res.status(500).json({ error : "Gagal Mengambil Data Cuaca"});
  }
});

app.listen(PORT, () => {
  console.log("Server jalan di https://localhost:${PORT}");
});