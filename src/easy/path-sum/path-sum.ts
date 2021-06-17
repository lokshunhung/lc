import { TreeNode } from "lc/tools/tree-node";

export function hasPathSum(treeNode: TreeNode | null, targetSum: number): boolean {
    if (treeNode === null) {
        return false;
    }
    if (targetSum === treeNode.val && treeNode.left === null && treeNode.right === null) {
        return true;
    }
    let newTargetSum = targetSum - treeNode.val;
    return hasPathSum(treeNode.left, newTargetSum) || hasPathSum(treeNode.right, newTargetSum);
}
