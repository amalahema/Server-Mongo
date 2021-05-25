const express = require('express');
const http = require('http');//http verb
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3000;
const app = express();
const dishRouter = require('./route/dishrouter');
const promotionRouter = require('./route/promotionrouter');
const leaderRouter = require('./route/leaderrouter');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', dishRouter);//any request coming to that slash dishes endpoint will be handled by dishRouter
app.use('/promotions',promotionRouter);
app.use('/leaders', leaderRouter);
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => 
{
  console.log(req.headers);
  req.dishID = req.params.dishID;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);
server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
