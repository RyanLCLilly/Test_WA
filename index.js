const auth = require('cirrus-auth-module');
const express = require('express');
const app = express();

// Our port the application will listen on.
const PORT = process.env.PORT || 8080;

// call cirrus-auth-modue authenticate method on our express app
auth.authenticate(app);

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
