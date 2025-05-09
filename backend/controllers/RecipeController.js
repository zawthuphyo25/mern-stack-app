const Recipe = require("../models/Recipe");
const mongoose = require("mongoose");

const RecipeController = {
  index: async (req, res) => {
    let recipes = await Recipe.find().sort({ createdAt: -1 });
    return res.json(recipes);
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
  show: async (req, res) => {
    try {
      let id = req.params.id;
      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ msg: "invalid id" });
      }
      let recipe = await Recipe.findById(id);
      if (!recipe) {
        return res.status(404).json({ msg: "recipe not found" });
      }
      return res.json(recipe);
    } catch (e) {
      return res.status(500).json({ msg: "internet server error" });
    }
  },
  destroy: async (req, res) => {
    try {
      let id = req.params.id;
      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ msg: "invalid id" });
      }
      let recipe = await Recipe.findByIdAndDelete(id);
      if (!recipe) {
        return res.status(404).json({ msg: "recipe not found" });
      }
      return res.json(recipe);
    } catch (e) {
      return res.status(500).json({ msg: "internet server error" });
    }
  },
  update: async (req, res) => {
    try {
      let id = req.params.id;
      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ msg: "invalid id" });
      }
      let recipe = await Recipe.findByIdAndUpdate(id, {
        ...req.body,
      });
      if (!recipe) {
        return res.status(404).json({ msg: "recipe not found" });
      }
      return res.json(recipe);
    } catch (e) {
      return res.status(500).json({ msg: "internet server error" });
    }
  },
};

module.exports = RecipeController;
