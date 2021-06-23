import { reverseStr } from "./reverse-string-ii";

test.each`
    s             | k     | expectedOutput
    ${"abcd"}     | ${2}  | ${"bacd"}
    ${"abcdefg"}  | ${10} | ${"gfedcba"}
    ${"abcdefgh"} | ${2}  | ${"bacdfegh"}
    ${"abcdefgh"} | ${3}  | ${"cbadefhg"}
    ${"abcdefgh"} | ${4}  | ${"dcbaefgh"}
    ${"abcdefgh"} | ${5}  | ${"edcbafgh"}
`("_($s, $k) -> $expectedOutput", ({ s, k, expectedOutput }: any) => {
    let result = reverseStr(s, k);
    expect(result).toBe(expectedOutput);
});
