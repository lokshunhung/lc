import { TreeNode } from "lc/tools/tree-node";

export function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    if (root === null) {
        return false;
    }
    let queue: Array<[TreeNode | null, TreeNode]> = [];
    queue.push([null, root]);
    while (queue.length !== 0) {
        let foundParent: TreeNode | null | false = false;
        let children: Array<[TreeNode | null, TreeNode]> = [];
        while (queue.length !== 0) {
            let [parent, treeNode] = queue.pop()!;
            if (treeNode.val === x || treeNode.val === y) {
                if (foundParent !== false) {
                    return foundParent !== parent;
                } else {
                    foundParent = parent;
                }
            }
            [treeNode.left, treeNode.right]
                .filter((child): child is TreeNode => child !== null)
                .forEach((child) => children.push([treeNode, child]));
        }
        if (foundParent !== false) {
            return false;
        }
        queue = children;
    }
    return false;
}
