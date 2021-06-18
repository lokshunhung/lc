import { TreeNode } from "lc/tools/tree-node";

function sumLeaves(root: TreeNode | null, pathSum: number = 0): number {
    if (root === null) {
        return 0;
    }
    let newPathSum = pathSum * 10 + root.val;
    if (root.left === null && root.right === null) {
        return newPathSum;
    }
    let leftSum = sumLeaves(root.left, newPathSum);
    let rightSum = sumLeaves(root.right, newPathSum);
    return leftSum + rightSum;
}

export function sumNumbers(root: TreeNode | null): number {
    return sumLeaves(root, 0);
}
