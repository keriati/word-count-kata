import * as fs from 'fs';

export class FileLoader {
    readFileSync(path) {
        return fs.readFileSync(path, { encoding: 'UTF8' });
    }

    readFile(path, callBack) {
        if (! fs.existsSync(path)) {
            throw new Error('File not found: ' + path);
        }
        return fs.readFile(path, { encoding: 'UTF8' }, callBack);
    }
}
