const express = require('express');
const router = express.Router();
const app = express();

// const { db, dbError } = global as unknown as {
//   db: mysql.Pool;
//   dbError: Function;
// };

console.log('entered', router);

// router.get('/', (req, res) => {
//   res.send({test: 'hi'});
// });
// app.get('/api/test', (req, res) => {
//   app.query('SELECT * FROM lwUser', (err, data) => {
//     if (!err) {
//       res.send({products: data});
//     } else {
//       res.send(err);
//     }
//   });
// });

module.exports = app;
