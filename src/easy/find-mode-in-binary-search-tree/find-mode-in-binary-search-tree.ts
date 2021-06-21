import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(treeNode: TreeNode | null, result: Record<number, number>): void {
    if (treeNode === null) {
        return;
    }
    if (result[treeNode.val] === undefined) {
        result[treeNode.val] = 1;
    } else {
        ++result[treeNode.val];
    }
    visitTreeNode(treeNode.left, result);
    visitTreeNode(treeNode.right, result);
}

// TODO: efficiency (BST; LSubtree <= treeNode; RSubtree >= treeNode)
export function findMode(root: TreeNode | null): number[] {
    let result: Record<number, number> = {};
    visitTreeNode(root, result);

    let maxFreq = Math.max(...Object.values(result));
    return Object.entries(result)
        .filter(([_, value]) => value === maxFreq)
        .map(([key, _]) => parseInt(key, 10));
}
