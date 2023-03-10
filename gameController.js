import Games from "./game.js";
import GameService from "./GameService.js";

class gameController {
  async create(req, res) {
    try {
      console.log(req.files);
      const game = await GameService.create(req.body, req.files.picture);
      res.json(game);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const games = await GameService.getAll();
      return res.json(games);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const game = await GameService.getOne(req.params.id);
      return res.json(game);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedGame = await GameService.update(req.body);
      return res.json(updatedGame);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const game = await GameService.delete(req.params.id);
      return res.json(game);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new gameController();
