import { TreeNode } from "lc/tools/tree-node";

export function inorderTraversal(root: TreeNode | null, visit: (treeNode: TreeNode) => void): void {
    if (root === null) {
        return;
    }
    inorderTraversal(root.left, visit);
    visit(root);
    inorderTraversal(root.right, visit);
}
