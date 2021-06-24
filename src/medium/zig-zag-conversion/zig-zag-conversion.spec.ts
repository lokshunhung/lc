import { convert } from "./zig-zag-conversion";

test.each`
    s                   | numRows | expectedOutput
    ${"abcdefghijklmn"} | ${3}    | ${"aeimbdfhjlncgk"}
    ${"PAYPALISHIRING"} | ${3}    | ${"PAHNAPLSIIGYIR"}
    ${"PAYPALISHIRING"} | ${4}    | ${"PINALSIGYAHRPI"}
    ${"ABC"}            | ${2}    | ${"ACB"}
    ${"A"}              | ${1}    | ${"A"}
`("_($s, $numRows) -> $expectedOutput", ({ s, numRows, expectedOutput }: any) => {
    let result = convert(s, numRows);
    expect(result).toBe(expectedOutput);
});
