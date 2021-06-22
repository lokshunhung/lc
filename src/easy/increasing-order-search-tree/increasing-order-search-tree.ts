import { TreeNode } from "lc/tools/tree-node";

function findRightEnd(root: TreeNode): TreeNode {
    if (root.right === null) {
        return root;
    }
    return findRightEnd(root.right);
}

export function increasingBST(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }
    if (root.left !== null) {
        let newRoot = increasingBST(root.left)!;
        let rightEnd = findRightEnd(newRoot);
        rightEnd.right = root;
        root.left = null;
        return increasingBST(newRoot);
    }
    root.right = increasingBST(root.right);
    return root;
}
