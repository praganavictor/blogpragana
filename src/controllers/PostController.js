const Post = require("../model/Post");

module.exports = {
  async index(req, res) {
    try {
      const { page = 1 } = req.query;
      const posts = await Post.paginate({}, { page, limit: 10 });

      return res.json(posts);
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar os posts ${error}` });
    }
  },

  async show(req, res) {
    try {
      const post = await Post.find({ _id: req.params.id });

      return res.json(post);
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar os posts ${error}` });
    }
  },

  async store(req, res) {
    try {
      const post = await Post.create(req.body);

      return res.json(post);
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar os posts ${error}` });
    }
  },

  async update(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });

      return res.json(post);
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar os posts ${error}` });
    }
  },

  async destroy(req, res) {
    try {
      await Post.findByIdAndDelete(req.params.id);

      return res.send({ alert: "Apagado com sucesso" });
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Erro ao carregar os posts ${error}` });
    }
  }
};
