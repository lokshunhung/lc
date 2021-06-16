import { TreeNode } from "lc/tools/tree-node";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
