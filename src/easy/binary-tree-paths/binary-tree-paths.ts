import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(result: string[], treeNode: TreeNode | null, currentPath: string): void {
    if (treeNode === null) {
        return;
    }
    let val = treeNode.val;
    let newPath = (currentPath !== "" ? currentPath + "->" : "") + String(val);
    if (treeNode.left === null && treeNode.right === null) {
        result.push(newPath);
        return;
    }
    visitTreeNode(result, treeNode.left, newPath);
    visitTreeNode(result, treeNode.right, newPath);
}

export function binaryTreePaths(root: TreeNode | null): string[] {
    let result: string[] = [];
    visitTreeNode(result, root, "");
    return result;
}
