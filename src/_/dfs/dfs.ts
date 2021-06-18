import { TreeNode } from "lc/tools/tree-node";

export function DFS(root: TreeNode | null, visit: (treeNode: TreeNode) => void): void {
    if (root === null) {
        return;
    }
    visit(root);
    DFS(root.left, visit);
    DFS(root.right, visit);
}
