import { TreeNode } from "lc/tools/tree-node";

export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (root === null) {
        return 0;
    }
    let sum = 0;
    if (low <= root.val && root.val <= high) {
        sum += root.val;
    }
    sum += rangeSumBST(root.left, low, high);
    sum += rangeSumBST(root.right, low, high);
    return sum;
}
