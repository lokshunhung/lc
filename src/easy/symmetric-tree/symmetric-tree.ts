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

export function isSymmetricIterative(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }
    let queue: Array<TreeNode | null> = [];
    queue.push(root, root);
    while (queue.length !== 0) {
        let l = queue.shift() as TreeNode | null;
        let r = queue.shift() as TreeNode | null;
        if (l === null && r === null) {
            continue;
        }
        if (l === null || r === null) {
            return false;
        }
        if (l.val !== r.val) {
            return false;
        }
        queue.push(l.right, r.left);
        queue.push(l.left, r.right);
    }
    return true;
}
