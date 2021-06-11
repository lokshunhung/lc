import { toArray, toListNode } from "lc/tools/list-node";
import { addTwoNumbers } from "./add-two-numbers";

test.each`
    a1                       | a2              | expectedOutput
    ${[2, 4, 3]}             | ${[5, 6, 4]}    | ${[7, 0, 8]}
    ${[0]}                   | ${[0]}          | ${[0]}
    ${[9, 9, 9, 9, 9, 9, 9]} | ${[9, 9, 9, 9]} | ${[8, 9, 9, 9, 0, 0, 0, 1]}
`("_($a1, $a2) -> $expectedOutput", ({ a1, a2, expectedOutput }: any) => {
    let l1 = toListNode(a1);
    let l2 = toListNode(a2);
    let result = addTwoNumbers(l1, l2);
    let resultArr = toArray(result);
    expect(resultArr).toStrictEqual(expectedOutput);
});
