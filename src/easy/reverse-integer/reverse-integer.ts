export function reverse(x: number): number {
    let isPositive = x >= 0;
    let current = Math.abs(x);

    let result = 0;

    while (current !== 0) {
        let digit = current % 10;
        current = ~~(current / 10);

        result = result * 10 + digit;

        if (result > 2 ** 31 - (isPositive ? 0 : 1)) {
            return 0;
        }
    }

    return (isPositive ? 1 : -1) * result;
}
