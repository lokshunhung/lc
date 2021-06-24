import { ListNode } from "lc/tools/list-node";

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (head === null) {
        return null;
    }
    let i = 0;
    let setinel = new ListNode(-1, head);
    let beforeLeft: ListNode | null = setinel;
    while (i + 1 < left) {
        beforeLeft = beforeLeft!.next;
        ++i;
    }
    let afterRight: ListNode | null = beforeLeft!.next;
    let reverseStack: Array<number> = [];
    while (i < right) {
        reverseStack.push(afterRight!.val);
        afterRight = afterRight!.next;
        ++i;
    }
    let reverse = beforeLeft;
    while (reverseStack.length !== 0) {
        let val = reverseStack.pop()!;
        reverse!.next = new ListNode(val);
        reverse = reverse!.next;
    }
    reverse!.next = afterRight;
    return setinel.next;
}
