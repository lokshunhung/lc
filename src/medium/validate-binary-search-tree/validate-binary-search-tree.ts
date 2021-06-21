import { TreeNode } from "lc/tools/tree-node";

interface Result {
    min: number | null;
    max: number | null;
}

function visitTreeNode(root: TreeNode | null, result: Result): boolean {
    if (root === null) {
        return true;
    }
    let leftRes: Result = { min: null, max: null };
    let rightRes: Result = { min: null, max: null };
    let isLeftValid = visitTreeNode(root.left, leftRes);
    let isRightValid = visitTreeNode(root.right, rightRes);
    let isSelfValid =
        (leftRes.max ?? Number.MIN_SAFE_INTEGER) < root.val && (rightRes.min ?? Number.MAX_SAFE_INTEGER) > root.val;
    if (!(isLeftValid && isRightValid && isSelfValid)) {
        return false;
    }
    result.min = Math.min.apply(
        null,
        [leftRes.min, root.val, rightRes.min].filter((_): _ is number => _ !== null)
    );
    result.max = Math.max.apply(
        null,
        [leftRes.max, root.val, rightRes.max].filter((_): _ is number => _ !== null)
    );
    return true;
}

export function isValidBST(root: TreeNode | null): boolean {
    return visitTreeNode(root, { min: null, max: null });
}
