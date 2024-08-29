// Create a web server
// Create a route for the /comments URL
// When a request is made to the /comments URL, read the comments.json file and send the data to the client

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred reading your comments');
    } else {
      res.send(data);
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});