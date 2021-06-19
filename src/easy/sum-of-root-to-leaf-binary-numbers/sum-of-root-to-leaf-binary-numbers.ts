import { TreeNode } from "lc/tools/tree-node";

function sumTreeNode(treeNode: TreeNode | null, pathSum: number): number {
    if (treeNode === null) {
        return 0;
    }
    let newPathSum = (pathSum << 1) + treeNode.val;
    if (treeNode.left === null && treeNode.right === null) {
        return newPathSum;
    }
    let leftSum = sumTreeNode(treeNode.left, newPathSum);
    let rightSum = sumTreeNode(treeNode.right, newPathSum);
    return leftSum + rightSum;
}

export function sumRootToLeaf(root: TreeNode | null): number {
    return sumTreeNode(root, 0);
}
