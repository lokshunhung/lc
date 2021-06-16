import { isValid } from "./valid-parentheses";

test.each`
    s           | expectedOutput
    ${"()"}     | ${true}
    ${"()[]{}"} | ${true}
    ${"(]"}     | ${false}
    ${"([)]"}   | ${false}
    ${"{[]}"}   | ${true}
    ${"["}      | ${false}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = isValid(s);
    expect(result).toBe(expectedOutput);
});
