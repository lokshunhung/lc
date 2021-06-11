import { ListNode } from "lc/tools/list-node";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head = new ListNode();
    let result = head;

    while (true) {
        let carry = 0;

        if (l1) {
            result.val += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            result.val += l2.val;
            l2 = l2.next;
        }
        if (result.val >= 10) {
            result.val -= 10;
            carry = 1;
        }

        if (!l1 && !l2 && !carry) {
            break;
        }

        let next = new ListNode(carry);
        result.next = next;
        result = next;
    }

    return head;
}
