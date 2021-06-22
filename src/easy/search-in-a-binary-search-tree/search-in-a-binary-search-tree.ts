import { TreeNode } from "lc/tools/tree-node";

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) {
        return null;
    }
    if (val < root.val) {
        return searchBST(root.left, val);
    }
    if (val > root.val) {
        return searchBST(root.right, val);
    }
    return root;
}
