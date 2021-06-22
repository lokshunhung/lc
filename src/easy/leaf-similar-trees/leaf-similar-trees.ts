import { TreeNode } from "lc/tools/tree-node";

function findLeaves(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    if (root.left === null && root.right === null) {
        return [root.val];
    }
    return [...findLeaves(root.left), ...findLeaves(root.right)];
}

function arrayEquals(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// TODO: do not allocate array
export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let leaves1 = findLeaves(root1);
    let leaves2 = findLeaves(root2);
    return arrayEquals(leaves1, leaves2);
}
