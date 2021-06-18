import { TreeNode } from "lc/tools/tree-node";

function getEnd(treeNode: TreeNode): TreeNode {
    if (treeNode.right !== null) {
        return getEnd(treeNode.right);
    }
    if (treeNode.left !== null) {
        return getEnd(treeNode.left);
    }
    return treeNode;
}

export function flatten(root: TreeNode | null): void {
    if (root === null) {
        return;
    }
    flatten(root.left);
    flatten(root.right);
    if (root.left !== null) {
        let right = root.right;
        let leftEnd = getEnd(root.left);
        root.right = root.left;
        root.left = null;
        leftEnd.right = right;
    }
}
