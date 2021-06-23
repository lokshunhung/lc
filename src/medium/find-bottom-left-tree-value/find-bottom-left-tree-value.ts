import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(result: Record<"val" | "depth", number>, depth: number, treeNode: TreeNode | null): void {
    if (treeNode === null) {
        return;
    }
    if (treeNode.left === null && treeNode.right === null) {
        if (depth >= result.depth) {
            result.depth = depth;
            result.val = treeNode.val;
        }
        return;
    }
    visitTreeNode(result, depth + 1, treeNode.right);
    visitTreeNode(result, depth + 1, treeNode.left);
}

export function findBottomLeftValue(root: TreeNode | null): number {
    let result: Record<"val" | "depth", number> = {
        depth: -1,
        val: -1,
    };
    visitTreeNode(result, 0, root);
    return result.val;
}
