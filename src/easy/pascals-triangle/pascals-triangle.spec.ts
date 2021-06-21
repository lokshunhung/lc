import { generate } from "./pascals-triangle";

test.each`
    numRows | expectedOutput
    ${5}    | ${[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]}
    ${1}    | ${[[1]]}
`("_($numRows) -> $expectedOutput", ({ numRows, expectedOutput }: any) => {
    let result = generate(numRows);
    expect(result).toStrictEqual(expectedOutput);
});
