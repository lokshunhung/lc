import { fib } from "./fibonacci-number";

test.each`
    n    | expectedOutput
    ${0} | ${0}
    ${1} | ${1}
    ${2} | ${1}
    ${3} | ${2}
    ${4} | ${3}
    ${5} | ${5}
`("_($n) -> $expectedOutput", ({ n, expectedOutput }: any) => {
    let result = fib(n);
    expect(result).toBe(expectedOutput);
});
