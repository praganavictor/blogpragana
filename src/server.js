const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;

const routes = require("./routes");

const server = express();

mongoose.connect("mongodb://localhost:27017/blogpragana", {
  useNewUrlParser: true
});

mongoose.set("useCreateIndex", true);

mongoose.set("useFindAndModify", false);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => console.log(`Escutando a porta ${port}`));
