import { TreeNode } from "lc/tools/tree-node";

export function BFS(root: TreeNode | null, visit: (treeNode: TreeNode) => void): void {
    if (root === null) {
        return;
    }
    let queue: Array<TreeNode> = [];
    queue.push(root);

    while (queue.length !== 0) {
        let treeNode = queue.shift()!;
        visit(treeNode);

        if (treeNode.left !== null) {
            queue.push(treeNode.left);
        }
        if (treeNode.right !== null) {
            queue.push(treeNode.right);
        }
    }
}
