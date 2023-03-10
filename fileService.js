import * as uuid from "uuid";
import * as path from "path";

class FileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + ".jpg";
      console.log(fileName, "---fileName");
      const filePath = path.resolve("static", fileName);
      console.log(filePath, "---filePath");

      const res = file.mv(filePath);
      console.log(res, "---file.mv(filePath)");
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FileService();
