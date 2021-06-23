class Node {
    val: number;
    neighbors: Node[];
    constructor(val?: number, neighbors?: Node[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

function register(reg: Record<number, number[]>, node: Node): void {
    let val = node.val;
    reg[val] = [];
    for (let n of node.neighbors) {
        reg[val].push(n.val);
    }
    for (let n of node.neighbors) {
        if (!(n.val in reg)) {
            register(reg, n);
        }
    }
}

export function cloneGraph(node: Node | null): Node | null {
    if (node === null) {
        return null;
    }

    let reg: Record<string, number[]> = {};
    register(reg, node);

    let nodes: Record<string, Node> = {};
    for (let k of Object.keys(reg)) {
        let nk = Number(k);
        nodes[nk] = new Node(nk);
    }
    for (let k of Object.keys(reg)) {
        let neighbors = reg[k];
        for (let n of neighbors) {
            nodes[k].neighbors.push(nodes[n]);
        }
    }

    return nodes[node.val];
}
