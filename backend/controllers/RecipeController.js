const RecipeController = {
  index: (req, res) => {
    return res.json({ msg: "get all recipes" });
  },
  store: (req, res) => {
    return res.json({ msg: "store single recipe" });
  },
  show: (req, res) => {
    return res.json({ msg: "get single recipe" });
  },
  destroy: (req, res) => {
    return res.json({ msg: "delete single recipe" });
  },
  update: (req, res) => {
    return res.json({ msg: "update single recipe" });
  },
};

module.exports = RecipeController;
