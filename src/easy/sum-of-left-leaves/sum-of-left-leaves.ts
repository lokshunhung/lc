import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(treeNode: TreeNode | null, isLeft: boolean): number {
    if (treeNode === null) {
        return 0;
    }
    if (treeNode.left === null && treeNode.right === null) {
        return isLeft ? treeNode.val : 0;
    }
    let leftSum = visitTreeNode(treeNode.left, true);
    let rightSum = visitTreeNode(treeNode.right, false);
    return leftSum + rightSum;
}

export function sumOfLeftLeaves(root: TreeNode | null): number {
    return visitTreeNode(root, false);
}
