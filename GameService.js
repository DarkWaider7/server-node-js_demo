import Games from "./game.js";
import fileService from "./fileService.js";

class GameService {
  async create(game, picture) {
    const fileName = fileService.saveFile(picture);
    const createdGame = await Games.create({ ...game, picture: fileName });
    return createdGame;
  }

  async getAll(game) {
    const games = await Games.find(game);
    return games;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id not found");
    }
    const game = await Games.findById(id);
    return game;
  }

  async update(game) {
    if (!game._id) {
      throw new Error("err");
    }
    const updatedGame = await Games.findByIdAndUpdate(game._id, game, {
      new: true,
    });
    return updatedGame;
  }

  async delete(id) {
    if (!id) {
      throw new Error("id not found");
    }

    const game = await Games.findByIdAndDelete(id);
    return game;
  }
}

export default new GameService();
