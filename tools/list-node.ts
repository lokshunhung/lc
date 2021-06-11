export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function toListNode(arr: number[]): ListNode | null {
    let head: ListNode | null = null;
    let current: ListNode | null = head;
    for (let i = 0; i < arr.length; ++i) {
        let next: ListNode = new ListNode(arr[i]);
        if (current === null) {
            head = next;
        } else {
            current.next = next;
        }
        current = next;
    }
    return head;
}

export function toArray(listNode: ListNode | null): number[] {
    let arr: number[] = [];
    let current = listNode;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}
