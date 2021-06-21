import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(treeNode: TreeNode | null, minNode: TreeNode | null, maxNode: TreeNode | null): boolean {
    if (treeNode === null) {
        return true;
    }
    if ((minNode === null || minNode.val < treeNode.val) && (maxNode === null || treeNode.val < maxNode.val)) {
        let isLeftValid = visitTreeNode(treeNode.left, minNode, treeNode);
        let isRightValid = visitTreeNode(treeNode.right, treeNode, maxNode);
        return isLeftValid && isRightValid;
    }
    return false;
}

export function isValidBST(root: TreeNode | null): boolean {
    return visitTreeNode(root, null, null);
}
