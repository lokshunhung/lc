import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(treeNode: TreeNode | null, value: number | null): boolean {
    if (treeNode === null) {
        return true;
    }
    if (value !== null && treeNode.val !== value) {
        return false;
    }
    let isLeftUnival = visitTreeNode(treeNode.left, treeNode.val);
    let isRightUnival = visitTreeNode(treeNode.right, treeNode.val);
    return isLeftUnival && isRightUnival;
}

export function isUnivalTree(root: TreeNode | null): boolean {
    return visitTreeNode(root, null);
}
