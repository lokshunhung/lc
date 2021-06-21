export function fizzBuzz(n: number): string[] {
    let result: string[] = [];
    if (n <= 0) {
        return result;
    }
    let isDivBy3 = n % 3 === 0;
    let isDivBy5 = n % 5 === 0;
    if (isDivBy3 && isDivBy5) {
        result.push("FizzBuzz");
    } else if (isDivBy3) {
        result.push("Fizz");
    } else if (isDivBy5) {
        result.push("Buzz");
    } else {
        result.push(String(n));
    }
    return fizzBuzz(n - 1).concat(result);
}
