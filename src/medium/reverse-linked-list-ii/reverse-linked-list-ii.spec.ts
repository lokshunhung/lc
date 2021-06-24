import { toArray, toListNode } from "lc/tools/list-node";
import { reverseBetween } from "./reverse-linked-list-ii";

test.each`
    head      | left | right | expectedOutput
    ${[5]}    | ${1} | ${1}  | ${[5]}
    ${[3, 5]} | ${1} | ${2}  | ${[5, 3]}
`("_($head, $left, $right) -> $expectedOutput", ({ head, left, right, expectedOutput }: any) => {
    let lHead = toListNode(head);
    let result = reverseBetween(lHead, left, right);
    let resultArr = toArray(result);
    expect(resultArr).toStrictEqual(expectedOutput);
});
