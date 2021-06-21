export function rotate(matrix: number[][]): void {
    let n = matrix.length;
    for (let i = 0; i < n - 1; ++i) {
        for (let j = i; j < n - 1 - i; ++j) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = tmp;
        }
    }
}

/*
+---+
| x |
+---+

+---+---+
| x |   |
+---+---+
|   |   |
+---+---+

+---+---+---+
| x | x |   |
+---+---+---+
|   | x |   |
+---+---+---+
|   |   |   |
+---+---+---+

+---+---+---+---+
| x | x | x |   |
+---+---+---+---+
|   | x |   |   |
+---+---+---+---+
|   |   |   |   |
+---+---+---+---+
|   |   |   |   |
+---+---+---+---+


+---+---+---+---+---+
| x | x | x | x |   |
+---+---+---+---+---+
|   | x | x |   |   |
+---+---+---+---+---+
|   |   | x |   |   |
+---+---+---+---+---+
|   |   |   |   |   |
+---+---+---+---+---+
|   |   |   |   |   |
+---+---+---+---+---+
*/
