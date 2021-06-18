import { TreeNode } from "lc/tools/tree-node";

function maxDepth(treeNode: TreeNode | null): number {
    if (treeNode === null) {
        return 0;
    }
    return 1 + Math.max(maxDepth(treeNode.left), maxDepth(treeNode.right));
}

export function isBalanced(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }
    let leftDepth = maxDepth(root.left);
    let rightDep = maxDepth(root.right);
    return Math.abs(leftDepth - rightDep) <= 1;
}
