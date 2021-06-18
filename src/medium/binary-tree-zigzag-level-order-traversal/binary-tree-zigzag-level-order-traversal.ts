import { TreeNode } from "lc/tools/tree-node";

function forEachChildren(treeNode: TreeNode, reverse: boolean, visit: (childNode: TreeNode) => void): void {
    [treeNode.left, treeNode.right]
        [reverse ? "reverse" : "concat"]()
        .filter((child: TreeNode | null): child is TreeNode => child !== null)
        .forEach(visit);
}

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }

    let level = 0;
    let result: number[][] = [];
    let queue: Array<TreeNode> = [];
    queue.push(root);

    while (queue.length !== 0) {
        let children: Array<TreeNode> = [];

        while (queue.length !== 0) {
            let treeNode = queue.shift() as TreeNode;
            if (result[level] === undefined) {
                result[level] = [];
            }
            result[level].push(treeNode.val);
            let reverse = level % 2 === 1;
            forEachChildren(treeNode, reverse, (childNode) => {
                children.push(childNode);
            });
        }

        ++level;
        queue = children.reverse();
    }

    return result;
}
