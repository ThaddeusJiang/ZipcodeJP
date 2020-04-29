const express = require('express');
const path = require('path');
var cors = require('cors');

const PORT = process.env.PORT || 5000;

const findApi = require('./apis/find');

const apiRouter = express.Router();
apiRouter.get('/', (req, res) =>
  res.render('pages/api', {
    hostname: req.hostname,
  })
);

apiRouter.get('/find', function (req, res) {
  const q = req.query.q;
  if (q) {
    const data = findApi.find(q);
    if (data) {
      res.json({ data });
    } else {
      res.status(404).json({ error: 'record not found!' });
    }
  } else {
    res.status(400).json({ error: 'q can not be empty!' });
  }
});

express()
  .use(cors())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .use('/api', apiRouter)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
