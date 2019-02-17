export class FileReader {
    constructor(fileName, fileLoader) {
        this.fileName = fileName;
        this.fileLoader = fileLoader;
    }

    read(callBack) {
        this.fileLoader.readFile(this.fileName, (error, data) => {
            callBack(data);
        });
    }
}
