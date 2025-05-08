const Recipe = require("../models/Recipe");

const RecipeController = {
  index: (req, res) => {
    return res.json({ msg: "get all recipes" });
  },
  store: async (req, res) => {
    try {
      const { title, description, ingredients } = req.body;
      const recipe = await Recipe.create({
        title,
        description,
        ingredients,
      });
      return res.json(recipe);
    } catch (e) {
      return res.status(400).json({ msg: "invalid fields" });
    }
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
