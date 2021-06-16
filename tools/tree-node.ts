export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function buildTreeNode(arr: Array<number | null>, i: number): TreeNode | null {
    if (i >= arr.length) {
        return null;
    }
    let val = arr[i];
    if (val === null) {
        return null;
    }
    let left = buildTreeNode(arr, (i + 1) * 2 - 1);
    let right = buildTreeNode(arr, (i + 1) * 2);
    let treeNode = new TreeNode(val, left, right);
    return treeNode;
}

export function toTreeNode(arr: Array<number | null>): TreeNode | null {
    return buildTreeNode(arr, 0);
}

function pushTreeNode(arr: Array<number | null>, i: number, treeNode: TreeNode | null): void {
    if (treeNode === null) {
        arr[i] = null;
        return;
    }
    arr[i] = treeNode.val;
    pushTreeNode(arr, (i + 1) * 2 - 1, treeNode.left);
    pushTreeNode(arr, (i + 1) * 2, treeNode.right);
}

export function toArray(treeNode: TreeNode | null): Array<number | null> {
    let arr: Array<number | null> = [];
    pushTreeNode(arr, 0, treeNode);
    let length = arr.length;
    let isTail = true;
    for (let i = length - 1; i >= 0; i--) {
        if (isTail && (arr[i] === null || arr[i] === undefined)) {
            arr.pop();
            continue;
        }
        isTail = false;
        if (arr[i] === undefined) {
            arr[i] = null;
        }
    }
    return arr;
}
