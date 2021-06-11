import { reverse } from "./reverse-integer";

test.each`
    x              | expectedOutput
    ${123}         | ${321}
    ${-123}        | ${-321}
    ${120}         | ${21}
    ${0}           | ${0}
    ${1463847412}  | ${2147483641}
    ${-1463847412} | ${-2147483641}
    ${1463847413}  | ${0}
    ${-1563847412} | ${0}
`("_($x) -> $expectedOutput", ({ x, expectedOutput }: any) => {
    let result = reverse(x);
    expect(result).toStrictEqual(expectedOutput);
});
