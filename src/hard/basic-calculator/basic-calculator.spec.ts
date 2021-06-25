import { calculate, computeValue, tokenize } from "./basic-calculator";

test.each`
    s                        | expectedOutput
    ${"1 + 1"}               | ${["1", "+", "1"]}
    ${" 2-1 + 2 "}           | ${["2", "-", "1", "+", "2"]}
    ${"(1+(4+5+2)-3)+(6+8)"} | ${["(", "1", "+", "(", "4", "+", "5", "+", "2", ")", "-", "3", ")", "+", "(", "6", "+", "8", ")"]}
    ${"+48 + -48"}           | ${["+", "48", "+", "-", "48"]}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = tokenize(s);
    expect(result).toStrictEqual(expectedOutput);
});

test.each`
    tokens                                                                                             | expectedOutput
    ${["1", "+", "1"]}                                                                                 | ${2}
    ${["2", "-", "1", "+", "2"]}                                                                       | ${3}
    ${["(", "1", "+", "(", "4", "+", "5", "+", "2", ")", "-", "3", ")", "+", "(", "6", "+", "8", ")"]} | ${23}
    ${["+", "48", "+", "-", "48"]}                                                                     | ${0}
    ${["(", "1", "+", "2", ")"]}                                                                       | ${3}
    ${["1", "-", "(", "1", "+", "2", ")"]}                                                             | ${-2}
`("_($tokens) -> $expectedOutput", ({ tokens, expectedOutput }: any) => {
    let result = computeValue(tokens, 0, tokens.length);
    expect(result).toBe(expectedOutput);
});

test.each`
    s                        | expectedOutput
    ${"1 + 1"}               | ${2}
    ${" 2-1 + 2 "}           | ${3}
    ${"(1+(4+5+2)-3)+(6+8)"} | ${23}
    ${"+48 + -48"}           | ${0}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = calculate(s);
    expect(result).toBe(expectedOutput);
});
