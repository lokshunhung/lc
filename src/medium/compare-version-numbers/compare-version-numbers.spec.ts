import { compareVersion } from "./compare-version-numbers";

test.each`
    version1     | version2   | expectedOutput
    ${"1.01"}    | ${"1.001"} | ${0}
    ${"1.0"}     | ${"1.0.0"} | ${0}
    ${"0.1"}     | ${"1.1"}   | ${-1}
    ${"1.0.1"}   | ${"1"}     | ${1}
    ${"7.5.2.4"} | ${"7.5.3"} | ${-1}
`("_($version1, $version2) -> $expectedOutput", ({ version1, version2, expectedOutput }: any) => {
    let result = compareVersion(version1, version2);
    expect(result).toBe(expectedOutput);
});
