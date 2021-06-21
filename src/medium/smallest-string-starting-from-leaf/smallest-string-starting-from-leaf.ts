import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(treeNode: TreeNode | null, acc: string): string {
    if (treeNode === null) {
        return acc;
    }
    let selfChar = String.fromCharCode(97 + treeNode.val);
    let leftStr = visitTreeNode(treeNode.left, `${selfChar}${acc}`);
    let rightStr = visitTreeNode(treeNode.right, `${selfChar}${acc}`);
    if (treeNode.left === null) {
        return rightStr;
    }
    if (treeNode.right === null) {
        return leftStr;
    }
    return leftStr.localeCompare(rightStr) < 0 ? leftStr : rightStr;
}

export function smallestFromLeaf(root: TreeNode | null): string {
    return visitTreeNode(root, "");
}
