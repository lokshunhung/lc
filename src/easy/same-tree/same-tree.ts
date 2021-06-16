import { TreeNode } from "lc/tools/tree-node";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null) {
        return q === null;
    }
    if (q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
