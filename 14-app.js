const express = require('express');
const app = express();
const path = require('path')
const port = 3000;

// Melayani file statis dari folder 'public' atau tempat lainnya
app.use(express.static(path.join(__dirname, 'public')));

app.
  get('/', (req, res) => {
  // res.send('<h1>Hello World</h1>');
    // res.json({
    //   nama : "Muhammad Zidan Dailer",
    //   email : "zidan.dailer@gmail.com",
    //   noHP : '085757564417',
    // });

    res.sendFile('./index.html', { root:__dirname })
    // res.sendFile(path.join(__dirname, 'index.html'));

  }).
  get('/about', (req, res) => {
    res.send('<h1>Ini adalah halaman About<h1/>');
  }).
  get('/contact', (req,res) => {
    res.send('<h1>Ini adalah halaman Contact</h1>')
  }).
  get('/personal', (req,res) => {
    res.send('<h1>Ini adalah Halaman Personal</h1>')
  }).
  listen(port, () => {
  console.log('Server is Running at port 3000');
  });

  //use adalah default route, yang ditangkap selain request di atas
  // app.use('/', (req, res) => {
  //   res.send(404, '<h1>Page Not Found</h1>')
  // })

  // app.use('/', (req, res) => {
  //   res.status(404);
  //   res.send('<h1>Page Not Found</h1>')
  // })

  // app.get('/product/:id', (req, res) => {
  //   res.send('Product ID : ' + req.params.id);
  // });

  // app.get('/product/:id/category/:idCat', (req, res) => {
  //   res.send(`Product ID :   ${req.params.id} <br>
  //             Category ID :  ${req.params.idCat}`);
  // });

  app.get('/product/:id', (req,res) => {
    res.send(`Product ID : ${req.params.id} <br>
              Category ID : ${req.query.category}`);
  });

  app.use('/', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>');
  // Atau jika ingin eksplisit
  // res.end();
  });




// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http
// .createServer((req, res) => {
//   //url

//   //abstraksi butuh path & respon
//   const renderHTML = (filePath, res) => {

//     //menggunakan path.join untuk menghindari masalah lintas sistem operasi
//     const fullPath = path.join(__dirname, filePath)

//       fs.readFile(fullPath, (err, data) => {
//       if (err) {
//         res.writeHead(500, {'Content-Type': 'text/plain'});
//         res.write('Error : Internal Server Error');
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//       }
//       res.end();
//     });
//   };


//   //writeHead
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//   });

//   //if url check
//   const url = req.url;
//   switch (url) {
//     case '/about':
//         renderHTML('./testabout.html', res);
//         break;
//     case '/contact' :
//         renderHTML('./testcontact.html', res);
//         break;
//     default:
//         renderHTML('./testindex.html', res);
//         break;
//   }

// })
// .listen(3000, () => {
//   console.log('server running on port 3000..');
// })