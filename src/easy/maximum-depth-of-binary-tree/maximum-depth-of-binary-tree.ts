import { TreeNode } from "lc/tools/tree-node";

export function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    let leftDepth = 1 + maxDepth(root.left);
    let rightDepth = 1 + maxDepth(root.right);
    return Math.max(leftDepth, rightDepth);
}
