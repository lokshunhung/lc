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
    for (let child of node.children) {
        visitNode(result, child);
    }
    result.push(node.val);
}

export function postorder(root: Node | null): number[] {
    let result: number[] = [];
    visitNode(result, root);
    return result;
}
