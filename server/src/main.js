const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const publicPath = path.join(__dirname, '..', 'public');
const middlewares = jsonServer.defaults({
  static: publicPath
});
const port = process.env.PORT || 9000;
const copyFiles = require('./helpers/copyFiles');

server.use(middlewares);
server.use('/api', router);

server.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

server.listen(port, async () => {
  await copyFiles(
    path.join(__dirname, 'uploads'),
    path.join(publicPath, 'uploads')
  );

  console.log(`Server running on port ${port}`);
});