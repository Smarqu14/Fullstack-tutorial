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

import './serverRender';
server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello world from <em>EJS</em>',
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
