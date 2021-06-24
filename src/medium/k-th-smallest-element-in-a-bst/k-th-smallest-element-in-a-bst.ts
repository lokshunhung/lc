import { TreeNode } from "lc/tools/tree-node";

function inorderTraverse(ref: Record<"k" | "result", number>, treeNode: TreeNode | null): void {
    if (treeNode === null) {
        return;
    }
    inorderTraverse(ref, treeNode.left);
    if (ref.k === 0) {
        return;
    }
    --ref.k;
    if (ref.k === 0) {
        ref.result = treeNode.val;
        return;
    }
    inorderTraverse(ref, treeNode.right);
}

export function kthSmallest(root: TreeNode | null, k: number): number {
    let ref: Record<"k" | "result", number> = { k, result: -1 };
    inorderTraverse(ref, root);
    return ref.result;
}
