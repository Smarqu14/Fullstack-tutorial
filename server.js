import config from './config.js';
import apiRouter from './api/index.js';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';

const server = express();

server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
  })
);
server.set('view engine', 'ejs');

import serverRender from './serverRender';
server.get('/', (req, res) => {
  serverRender()
    .then((content) => {
      res.render('index', {
        content,
      });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
