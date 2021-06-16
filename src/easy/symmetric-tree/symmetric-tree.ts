import { TreeNode } from "lc/tools/tree-node";

function isMirror(l: TreeNode | null, r: TreeNode | null): boolean {
    if (l === null && r === null) {
        return true;
    }
    if (l === null || r === null) {
        return false;
    }
    return l.val === r.val && isMirror(l.right, r.left) && isMirror(l.left, r.right);
}

export function isSymmetric(root: TreeNode | null): boolean {
    return isMirror(root, root);
}
