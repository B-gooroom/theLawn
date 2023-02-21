const express = require('express');
const app = express();
const mysql = require('mysql');
const test = require('./Router/test');
const cors = require('cors');
const path = require('path');
const port = 8000;

// app.use(cors());
app.use('/', test);
// app.use(cors({credentials: true, origin: 'http://192.168.35.93:5001'}));
app.use(cors({credentials: true, origin: 'http://localhost:8000'}));
// app.use(cors({credentials: true, origin: process.env.REACT_APP_API_URL}));

const db = mysql.createConnection({
  user: 'sam',
  host: 'localhost',
  password: '1234',
  database: 'TESTDB',
});

// const port = 8000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  // console.log('db', db);
});

// db.query('select 123 as abc', null, function (error, rows) {
//   console.log(error);
//   console.log(rows);
// });

global.db = db;

// console.log('err', db.error);

// (server.js에 추가)
app.use(express.static(path.join(__dirname, 'react-project/build')));

// app.get('/', function (request, response) {
//   response.sendFile(path.join(__dirname, '/react-project/build/index.html'));
//   // response.send('전송 성공');
// });

app.get('/api/test', (req, res) => {
  db.query('SELECT * FROM lwUser', (err, data) => {
    if (!err) {
      res.send({products: data});
      // res.status(200).json(data);
      console.log('ressss', data);
    } else {
      res.send(err);
    }
  });
});
app.get('/api/record', (req, res) => {
  db.query('SELECT * FROM lwRecord', (err, data) => {
    if (!err) {
      res.send({products: data});
    } else {
      res.send(err);
    }
  });
});

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (request, response) {
//   response.sendFile(path.join(__dirname, 'public/home.html'));
// });
