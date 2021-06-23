class Node {
    val: number;
    neighbors: Node[];
    constructor(val?: number, neighbors?: Node[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

function visitNode(seen: Record<string, 1>, clonedNodes: Record<string, Node>, originalNode: Node): void {
    let val = originalNode.val;
    if (val in seen) {
        return;
    }
    seen[val] = 1;
    if (!(val in clonedNodes)) {
        clonedNodes[val] = new Node(val);
    }
    let clonedNode = clonedNodes[val];
    for (let n of originalNode.neighbors) {
        let neighborVal = n.val;
        if (!(neighborVal in clonedNodes)) {
            clonedNodes[neighborVal] = new Node(neighborVal);
        }
        let clonedNeighbor = clonedNodes[neighborVal];
        clonedNode.neighbors.push(clonedNeighbor);
    }
    for (let n of originalNode.neighbors) {
        visitNode(seen, clonedNodes, n);
    }
}

export function cloneGraph(node: Node | null): Node | null {
    if (node === null) {
        return null;
    }
    let seen: Record<string, 1> = {};
    let clonedNodes: Record<string, Node> = {};
    visitNode(seen, clonedNodes, node);
    return clonedNodes[node.val];
}
