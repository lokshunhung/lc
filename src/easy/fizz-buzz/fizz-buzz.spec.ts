import { fizzBuzz } from "./fizz-buzz";

test.each`
    n     | expectedOutput
    ${3}  | ${["1", "2", "Fizz"]}
    ${5}  | ${["1", "2", "Fizz", "4", "Buzz"]}
    ${15} | ${["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]}
`("_($n) -> $expectedOutput", ({ n, expectedOutput }: any) => {
    let result = fizzBuzz(n);
    expect(result).toStrictEqual(expectedOutput);
});
