import { convertToTitle } from "./excel-sheet-column-title";

test.each`
    columnNumber  | expectedOutput
    ${1}          | ${"A"}
    ${28}         | ${"AB"}
    ${701}        | ${"ZY"}
    ${2147483647} | ${"FXSHRXW"}
    ${52}         | ${"AZ"}
`("_($columnNumber) -> $expectedOutput", ({ columnNumber, expectedOutput }) => {
    let result = convertToTitle(columnNumber);
    expect(result).toBe(expectedOutput);
});
