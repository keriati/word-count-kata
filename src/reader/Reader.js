import { FileLoader } from 'src/FileLoader.js';
import { ConsoleReader } from 'src/reader/ConsoleReader.js';
import { FileReader } from 'src/reader/FileReader.js';

export class Reader {
    static getReader(fileName) {
        return fileName
            ? new FileReader(
                fileName,
                new FileLoader(),
            )
            : new ConsoleReader();
    }
}
