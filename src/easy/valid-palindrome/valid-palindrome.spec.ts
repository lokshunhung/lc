import { isPalindrome } from "./valid-palindrome";

test.each`
    s                                   | expectedOutput
    ${"A man, a plan, a canal: Panama"} | ${true}
    ${"race a car"}                     | ${false}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = isPalindrome(s);
    expect(result).toBe(expectedOutput);
});
