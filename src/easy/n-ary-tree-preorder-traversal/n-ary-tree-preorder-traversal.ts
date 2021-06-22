class Node {
    val: number;
    children: Node[];
    constructor(val?: number) {
        this.val = val === undefined ? 0 : val;
        this.children = [];
    }
}

function visitNode(result: number[], node: Node | null): void {
    if (node === null) {
        return;
    }
    result.push(node.val);
    for (let child of node.children) {
        visitNode(result, child);
    }
}

export function preorder(root: Node | null): number[] {
    let result: number[] = [];
    visitNode(result, root);
    return result;
}
