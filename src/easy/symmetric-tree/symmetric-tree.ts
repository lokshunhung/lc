import { TreeNode } from "lc/tools/tree-node";

function visit(l: TreeNode | null, r: TreeNode | null): boolean {
    if (l === null) {
        return r === null;
    }
    if (r === null) {
        return false;
    }
    if (l.val !== r.val) {
        return false;
    }
    return visit(l.right, r.left) && visit(l.left, r.right);
}

export function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }
    return visit(root.left, root.right);
}
