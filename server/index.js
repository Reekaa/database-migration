const express = require("express");
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.post('/migrate', (req, res) => {
    console.log('here');
    res.status(201).json({
      message: 'Lets migrate that data',
    });
  });

app.listen(PORT, () => {
    console.log("Listen on the port 3001");
});