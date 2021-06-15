import { isPalindrome } from "./palindrome-number";

test.each`
    x           | expectedOutput
    ${121}      | ${true}
    ${-121}     | ${false}
    ${10}       | ${false}
    ${-101}     | ${false}
    ${0}        | ${true}
    ${99}       | ${true}
    ${1234321}  | ${true}
    ${12344321} | ${true}
`("_($x) -> $expectedOutput", ({ x, expectedOutput }: any) => {
    let result = isPalindrome(x);
    expect(result).toBe(expectedOutput);
});
