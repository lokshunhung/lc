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

export function toArray(treeNode: TreeNode | null): Array<number | null> {
    let result: Array<number | null> = [];
    let queue: Array<TreeNode | null> = [];
    queue.push(treeNode);

    while (queue.length !== 0) {
        let current = queue.shift() as TreeNode | null;
        if (current === null) {
            result.push(null);
            continue;
        }
        result.push(current.val);
        queue.push(current.left);
        queue.push(current.right);
    }

    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

export function toTreeNode(arr: Array<number | null>): TreeNode | null {
    if (arr.length === 0) {
        return null;
    }

    let numQ = Array.from(arr);
    let firstVal = numQ.shift() as number | null;
    if (firstVal === null) {
        return null;
    }

    let treeQ: Array<TreeNode | null> = [];
    let treeRoot = new TreeNode(firstVal);
    treeQ.push(treeRoot);

    while (numQ.length !== 0) {
        let treeNode = treeQ.shift() as TreeNode | null;
        if (treeNode === null) {
            continue;
        }

        let leftVal = numQ.shift() as number | null;
        if (leftVal !== null) {
            treeNode.left = new TreeNode(leftVal);
            treeQ.push(treeNode.left);
        }

        if (numQ.length === 0) {
            break;
        }
        let rightVal = numQ.shift() as number | null;
        if (rightVal !== null) {
            treeNode.right = new TreeNode(rightVal);
            treeQ.push(treeNode.right);
        }
    }
    return treeRoot;
}
