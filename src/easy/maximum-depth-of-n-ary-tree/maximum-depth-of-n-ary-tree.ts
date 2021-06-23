class Node {
    val: number;
    children: Node[];
    constructor(val?: number, children?: Node[]) {
        this.val = val === undefined ? 0 : val;
        this.children = children === undefined ? [] : children;
    }
}

export function maxDepth(root: Node | null): number {
    if (root === null) {
        return 0;
    }
    return (
        1 +
        root.children.reduce((currentMax, childNode) => {
            let depth = maxDepth(childNode);
            return Math.max(currentMax, depth);
        }, 0)
    );
}
