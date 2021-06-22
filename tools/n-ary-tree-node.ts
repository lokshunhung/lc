export class Node {
    val: number;
    children: Node[];
    constructor(val?: number) {
        this.val = val === undefined ? 0 : val;
        this.children = [];
    }
}

export function toNode(arr: Array<number | null>): Node | null {
    if (arr.length === 0) {
        return null;
    }
    let queue: Array<Node> = [];
    let root = new Node(arr[0]!);
    queue.push(root);
    let i = 0;
    let requireNew = false;
    while (++i < arr.length) {
        let e = arr[i];
        if (e === null) {
            queue.shift();
            requireNew = true;
            continue;
        }
        if (requireNew) {
            queue.push(new Node(e));
        } else {
            queue[0].children.push(new Node(e));
        }
        requireNew = false;
    }
    return root;
}
