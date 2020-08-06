const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
