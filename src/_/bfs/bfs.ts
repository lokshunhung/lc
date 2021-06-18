import { TreeNode } from "lc/tools/tree-node";

function forEachChildren(treeNode: TreeNode, visitChild: (childNode: TreeNode) => void): void {
    [treeNode.left, treeNode.right]
        .filter((child: TreeNode | null): child is TreeNode => child !== null)
        .forEach(visitChild);
}

export function BFS(root: TreeNode | null, visit: (treeNode: TreeNode) => void): void {
    if (root === null) {
        return;
    }
    let queue: Array<TreeNode> = [];
    queue.push(root);

    while (queue.length !== 0) {
        let treeNode = queue.shift()!;
        visit(treeNode);
        forEachChildren(treeNode, (childNode) => {
            queue.push(childNode);
        });
    }
}
