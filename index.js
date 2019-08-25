const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

const promoRouter = require('./routes/promotions_routes');
const leaderRouter = require('./routes/leaders_routes');
const dishesRouter = require('./routes/dishes_routes');


app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use('/dishes', dishesRouter);

 app.use((req, res, next) => {
   console.log(req.headers);
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.end('<html><body><h1>This is an Express Server</h1></body></html>');

 });

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});