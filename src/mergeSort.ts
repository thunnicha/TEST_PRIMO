import { getMax,countSort } from './mergeSortFuction';

export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const mergedArray = [...collection1, ...collection2, ...collection3];

    const max = getMax(mergedArray);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(mergedArray, exp);
    }

    return mergedArray;
}