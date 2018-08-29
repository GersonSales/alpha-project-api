const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).json({"response": "Welcome to the Alpha Project"});
});

app.listen(PORT, () => {
  console.log("Aplha Project is listen on " + PORT);
});
