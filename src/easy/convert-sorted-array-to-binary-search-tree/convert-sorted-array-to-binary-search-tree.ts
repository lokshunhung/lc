import { TreeNode } from "lc/tools/tree-node";

function buildTreeNode(arr: number[], lo: number, hi: number): TreeNode | null {
    if (lo > hi) {
        return null;
    }
    let mid = ~~((hi + lo) / 2);
    let treeNode = new TreeNode(arr[mid]);
    treeNode.left = buildTreeNode(arr, lo, mid - 1);
    treeNode.right = buildTreeNode(arr, mid + 1, hi);
    return treeNode;
}

export function sortedArrayToBST(nums: number[]): TreeNode | null {
    return buildTreeNode(nums, 0, nums.length - 1);
}
