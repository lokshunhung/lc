import { TreeNode } from "lc/tools/tree-node";

function visitTreeNode(minVal: number, treeNode: TreeNode | null): number {
    if (treeNode === null) {
        return Number.MAX_SAFE_INTEGER;
    }
    if (
        treeNode.left !== null &&
        treeNode.left.val > minVal &&
        treeNode.right !== null &&
        treeNode.right.val > minVal
    ) {
        if (treeNode.left.val > treeNode.right.val) {
            let rightMin = visitTreeNode(minVal, treeNode.right);
            return Math.min.apply(
                null,
                [treeNode.val, rightMin].filter((_) => _ !== minVal)
            );
        } else {
            let leftMin = visitTreeNode(minVal, treeNode.left);
            return Math.min.apply(
                null,
                [treeNode.val, leftMin].filter((_) => _ !== minVal)
            );
        }
    }
    let leftMin = visitTreeNode(minVal, treeNode.left);
    let rightMin = visitTreeNode(minVal, treeNode.right);
    return Math.min.apply(
        null,
        [treeNode.val, leftMin, rightMin].filter((_) => _ !== minVal)
    );
}

export function findSecondMinimumValue(root: TreeNode | null): number {
    if (root === null) {
        return -1;
    }
    let result = visitTreeNode(root.val, root);
    if (result === Number.MAX_SAFE_INTEGER) {
        return -1;
    }
    return result;
}
