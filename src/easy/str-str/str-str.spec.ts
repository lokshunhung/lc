// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

function strStr(haystack: string, needle: string): number {
    if (needle === "") {
        return 0;
    }
    for (let i = 0; i < haystack.length; ++i) {
        let c = haystack[i];
        if (c === needle[0]) {
            let match = true;
            for (let j = 0; match && j < needle.length; ++j) {
                if (haystack[i + j] !== needle[j]) {
                    match = false;
                }
            }
            if (match) {
                return i;
            }
        }
    }
    return -1;
}

test.each`
    haystack     | needle     | expectedOutput
    ${"hello"}   | ${"ll"}    | ${2}
    ${"aaaaa"}   | ${"bba"}   | ${-1}
    ${""}        | ${""}      | ${0}
    ${"abababc"} | ${"ababc"} | ${2}
`("_($haystack, $needle) -> $expectedOutput", ({ haystack, needle, expectedOutput }: any) => {
    let result = strStr(haystack, needle);
    expect(result).toBe(expectedOutput);
});
