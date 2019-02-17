import { StopWords } from 'src/StopWords.js';

describe('StopWords', () => {
    it('returns the content of stop words file as an array of words', () => {
        const fileLoaderMock = {
            readFileSync: jest.fn(() => {
                return 'a\nb'
            })
        };
        const stopWords = new StopWords(fileLoaderMock);

        const actual = stopWords.getStopWords();

        expect(actual).toEqual(['a', 'b']);
    });
});
