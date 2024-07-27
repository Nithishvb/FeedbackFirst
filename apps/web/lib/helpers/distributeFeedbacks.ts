export function distributeIntoSubArrays<T>(inputArray: T[]): T[][] {
    // Create an array with four empty sub-arrays
    const result: T[][] = [[], [], [], []];

    // Loop through the input array and distribute elements
    for (let i = 0; i < inputArray.length; i++) {
        // Use modulo to determine which sub-array to place the current element into
        const subArrayIndex: number = i % 4;
        result[subArrayIndex].push(inputArray[i]);
    }

    return result;
}
