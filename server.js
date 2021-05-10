const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const getAllHeaders = (req) => {
  return `Headers:\n${JSON.stringify(req.headers)}\n\n`;
}

const getPayload = (req) => {
  return `Payload:\n${JSON.stringify(req.body)}\n\n`
}

app.get('/', (req, res) => {
  const message = `${getAllHeaders(req)} Status 200 OK, GET request`
  res.send(message);
});

app.put('/', (req, res) => {
  const message = `${getAllHeaders(req)} Status 200 OK, PUT request`
  res.send(message);
})

app.post('/', (req, res) => {
  getPayload(req);
  const message = `${getAllHeaders(req)}${getPayload(req)}Status 201 Created, POST request`
  res.send(message);
});

app.listen(port, () => {
  console.log(`curl example app listening at http://localhost:${port}`);
})