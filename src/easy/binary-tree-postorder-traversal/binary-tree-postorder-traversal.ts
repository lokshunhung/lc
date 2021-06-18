import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(result: number[], treeNode: TreeNode | null): void {
    if (treeNode === null) {
        return;
    }
    visitTreeNode(result, treeNode.left);
    visitTreeNode(result, treeNode.right);
    result.push(treeNode.val);
}

export function postorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    visitTreeNode(result, root);
    return result;
}
