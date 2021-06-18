import { TreeNode } from "lc/tools/tree-node";

export function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    let leftCount = countNodes(root.left);
    let rightCount = countNodes(root.right);
    return 1 + leftCount + rightCount;
}
