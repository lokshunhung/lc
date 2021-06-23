import { TreeNode } from "lc/tools/tree-node";

function inplaceRebalance(treeNode: TreeNode | null): void {
    if (treeNode === null) {
        return;
    }
    if (treeNode.left !== null && treeNode.val < treeNode.left.val) {
        let tmp = treeNode.val;
        treeNode.val = treeNode.left.val;
        treeNode.left.val = tmp;
        inplaceRebalance(treeNode.left);
        return;
    }
    if (treeNode.right !== null && treeNode.val > treeNode.right.val) {
        let tmp = treeNode.val;
        treeNode.val = treeNode.right.val;
        treeNode.right.val = tmp;
        inplaceRebalance(treeNode.right);
        return;
    }
}

export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
        return null;
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
        return root;
    }
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
        return root;
    }

    // Delete root
    if (root.right === null) {
        return root.left;
    }
    if (root.left === null) {
        return root.right;
    }

    // Find inorder successor
    let successor = root.right;
    while (successor)
}
