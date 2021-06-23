import { reverseString } from "./reverse-string";

test.each`
    s                                   | expectedOutput
    ${"hello"}                          | ${"olleh"}
    ${"Hannah"}                         | ${"hannaH"}
    ${"A man, a plan, a canal: Panama"} | ${"amanaP :lanac a ,nalp a ,nam A"}
    ${"abcd"}                           | ${"dcba"}
    ${"abc"}                            | ${"cba"}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let input = s.split("");
    reverseString(input);
    let joinedResult = input.join("");
    expect(joinedResult).toBe(expectedOutput);
});
