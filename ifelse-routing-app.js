const http = require('http');
const fs = require('fs');

const server = http
.createServer((req, res) => {
  //url
  // const url = req.url;
  // console.log(url);

  //abstraksi butuh path & respon
  const renderHTML = (path, res) => {
      fs.readFile(path, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write('Error : File Not found');
      } else {
        res.write(data);
      }
      res.end();
    });
  };


  //writeHead
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  //if url check
  const url = req.url;
  switch (url) {
    case '/about':
        renderHTML('./testabout.html', res);
        break;
    case '/contact' :
        renderHTML('./testcontact.html', res);
        break;
    default:
        renderHTML('./testindex.html', res);
        break;
  }



//   if (url === '/contact') {
//     // fs.readFile('./testcontact.html', (err, data) => {
//     //   if (err) {
//     //     res.writeHead(404);
//     //     res.write('Error : File Not found');
//     //   } else {
//     //     res.write(data);
//     //   }
//     //   res.end();
//     // });

//     renderHTML('./testcontact.html', res);

//     // res.write('<h1>Ini adalah halaman Contact</h1>');


//   } else if (url === '/about') {
//     // res.write('<h1>Ini adalah halaman About</h1>');

//     // fs.readFile('./testabout.html', (err, data)=>{
//     //   if (err) {
//     //     res.writeHead(404);
//     //     res.write('Error : File Not Found');
//     //   } else {
//     //     res.write(data);
//     //   }
//     //   res.end();
//     // });

//     renderHTML('./testabout.html', res);
//   }else {
//     // res.write('<h1>Hello World</h1>');

//     // fs.readFile('./testindex.html', (err, data) => {
//     //   if (err) {
//     //     res.writeHead(404);
//     //     res.write('Error : File Not Found');
//     //   } else {
//     //     res.write(data);
//     //   }
//     //   res.end();
//     // });


//     renderHTML('./testindex.html', res);
//   }


})
.listen(3000, () => {
  console.log('server running on port 3000..');
})