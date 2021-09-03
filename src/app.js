const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../public/index.html'));
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // fs.readFile('./view/index.html', null, (error, data) => {
  //   if (error) {
  //     res.writeHead(404);
  //     res.write(data);
  //   } else {
  //     res.write(data);
  //   }
  //   res.end();
  // });
});

app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto' + PORT);
});
