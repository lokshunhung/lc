export function generate(numRows: number): number[][] {
    let result: number[][] = [];
    for (let i = 0; i < numRows; ++i) {
        let prevRow = i > 0 ? result[i - 1] : null;
        let row: number[] = [1];
        if (prevRow !== null)
            for (let j = 0; j < prevRow.length; ++j) {
                let prev1 = prevRow[j];
                let prev2 = j + 1 < prevRow.length ? prevRow[j + 1] : 0;
                row.push(prev1 + prev2);
            }
        result.push(row);
    }
    return result;
}
