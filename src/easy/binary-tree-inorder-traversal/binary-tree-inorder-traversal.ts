import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(result: number[], treeNode: TreeNode | null): void {
    if (treeNode === null) {
        return;
    }
    visitTreeNode(result, treeNode.left);
    result.push(treeNode.val);
    visitTreeNode(result, treeNode.right);
}

export function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    visitTreeNode(result, root);
    return result;
}
