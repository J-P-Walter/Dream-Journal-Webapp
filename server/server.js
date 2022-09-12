require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3500;
const db = require("./db/conn");

const app = express();

app.use(cors());
app.use(express.json());
//app.use(require("./routes/record"));

app.listen(PORT, () => {
  db.connectToServer((err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`Server is running on port ${PORT}`);
});
