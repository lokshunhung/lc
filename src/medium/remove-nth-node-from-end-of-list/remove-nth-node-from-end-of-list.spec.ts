import { ListNode, toArray, toListNode } from "lc/tools/list-node";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let setinel = new ListNode(0, head);
    let removeFrom: ListNode = setinel;
    let removeFromLength = 0;

    while (1) {}

    return null;
}

test.each`
    head               | n    | expectedOutput
    ${[1, 2, 3, 4, 5]} | ${2} | ${[1, 2, 3, 5]}
    ${[1]}             | ${1} | ${[]}
    ${[1, 2]}          | ${1} | ${[1]}
`("_($head, $n) -> $expectedOutput", ({ head, n, expectedOutput }: any) => {
    let tHead = toListNode(head);
    let result = removeNthFromEnd(tHead, n);
    let resultArr = toArray(result);
    expect(resultArr).toStrictEqual(expectedOutput);
});
