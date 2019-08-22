const express = require("express");
const PostController = require("./controllers/PostController");

const routes = express.Router();

routes.get("/posts", PostController.index);
routes.get("/posts/:id", PostController.show);
routes.post("/posts", PostController.store);
routes.put("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.destroy);

module.exports = routes;
