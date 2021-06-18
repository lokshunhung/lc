import { TreeNode } from "lc/tools/tree-node";

function forEachChildren(treeNode: TreeNode, visitChild: (childNode: TreeNode) => void): void {
    [treeNode.left, treeNode.right]
        .filter((child: TreeNode | null): child is TreeNode => child !== null)
        .forEach(visitChild);
}

export function DFS(root: TreeNode | null, visit: (treeNode: TreeNode) => void): void {
    if (root === null) {
        return;
    }
    visit(root);
    forEachChildren(root, (childNode) => {
        DFS(childNode, visit);
    });
}
