import { addBinary } from "./add-binary";

test.each`
    a         | b         | expectedOutput
    ${"11"}   | ${"1"}    | ${"100"}
    ${"1010"} | ${"1011"} | ${"10101"}
`("_($a, $b) -> $expectedOutput", ({ a, b, expectedOutput }: any) => {
    let result = addBinary(a, b);
    expect(result).toBe(expectedOutput);
});
