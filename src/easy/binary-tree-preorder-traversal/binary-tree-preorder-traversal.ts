import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(result: number[], treeNode: TreeNode | null): void {
    if (treeNode === null) {
        return;
    }
    result.push(treeNode.val);
    visitTreeNode(result, treeNode.left);
    visitTreeNode(result, treeNode.right);
}

export function preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    visitTreeNode(result, root);
    return result;
}
