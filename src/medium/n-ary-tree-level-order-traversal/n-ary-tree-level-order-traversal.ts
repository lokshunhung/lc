class Node {
    val: number;
    children: Node[];
    constructor(val?: number) {
        this.val = val === undefined ? 0 : val;
        this.children = [];
    }
}

export function levelOrder(root: Node | null): number[][] {
    let result: number[][] = [];
    if (root !== null) {
        let level = 0;
        let queue: Array<Node> = [];
        queue.push(root);
        while (queue.length !== 0) {
            let nextQueue: Array<Node> = [];
            while (queue.length !== 0) {
                let node = queue.shift() as Node;
                if (result[level] === undefined) {
                    result[level] = [];
                }
                result[level].push(node.val);
                nextQueue.push(...node.children);
            }
            queue = nextQueue;
            ++level;
        }
    }
    return result;
}
