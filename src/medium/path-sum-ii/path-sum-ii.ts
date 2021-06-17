import { TreeNode } from "lc/tools/tree-node";

function visit(result: number[][], path: readonly number[], treeNode: TreeNode | null, targetSum: number): void {
    if (treeNode === null) {
        return;
    }
    let newTargetSum = targetSum - treeNode.val;
    let newPath = [...path, treeNode.val];
    if (newTargetSum === 0 && treeNode.left === null && treeNode.right === null) {
        result.push(newPath);
    }
    visit(result, newPath, treeNode.left, newTargetSum);
    visit(result, newPath, treeNode.right, newTargetSum);
}

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let result: number[][] = [];
    visit(result, [], root, targetSum);
    return result;
}
