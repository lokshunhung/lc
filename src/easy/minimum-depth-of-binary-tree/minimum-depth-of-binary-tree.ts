import { TreeNode } from "lc/tools/tree-node";

export function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }
    let leftDepth = root.left ? minDepth(root.left) : Number.MAX_SAFE_INTEGER;
    let rightDepth = root.right ? minDepth(root.right) : Number.MAX_SAFE_INTEGER;
    return 1 + Math.min(leftDepth, rightDepth);
}
