import { merge } from './mergeSort';

describe('merge', () => {
    it('should merge and sort three arrays in ascending order', () => {
        const collection1 = [1, 3, 5, 7, 9];
        const collection2 = [10, 8, 6, 4, 2];
        const collection3 = [11, 12, 13, 14, 15];

        const mergedArray = merge(collection1, collection2, collection3);
        expect(mergedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
});
