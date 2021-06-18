import { TreeNode } from "lc/tools/tree-node";

export function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }
    let newRoot = new TreeNode(root.val);
    newRoot.left = invertTree(root.right);
    newRoot.right = invertTree(root.left);
    return newRoot;
}
