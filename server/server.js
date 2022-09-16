require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const db = require("./db/conn");
const routes = require("./routes/record");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  db.connectToServer((err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`Server is running on port ${PORT}`);
});
