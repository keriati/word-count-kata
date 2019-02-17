const STOP_WORDS_FILE_NAME = './stopwords.txt';

export class StopWords {
    constructor(fileLoader) {
        this.fileLoader = fileLoader;
    }

    getStopWords() {
        return this.readStopWordFile()
            .split('\n');
    }

    readStopWordFile() {
        return this.fileLoader.readFileSync(
            STOP_WORDS_FILE_NAME
        );
    }
}


