function fn(n: number, i: number, j: number): number {
    if (n === 0) {
        return i;
    }
    return fn(n - 1, j, i + j);
}

export function fib(n: number): number {
    return fn(n, 0, 1);
}
