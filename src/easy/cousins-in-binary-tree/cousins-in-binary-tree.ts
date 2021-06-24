import { TreeNode } from "lc/tools/tree-node";

export function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    if (root === null) {
        return false;
    }
    let setinel = new TreeNode(-1);
    let queue: Array<[TreeNode, TreeNode]> = [];
    queue.push([setinel, root]);
    while (queue.length !== 0) {
        let foundParent: TreeNode | null = null;
        let children: Array<[TreeNode, TreeNode]> = [];
        while (queue.length !== 0) {
            let [parent, treeNode] = queue.pop()!;
            if (treeNode.val === x || treeNode.val === y) {
                if (foundParent !== null) {
                    return foundParent !== parent;
                } else {
                    foundParent = parent;
                }
            }
            [treeNode.left, treeNode.right]
                .filter((child): child is TreeNode => child !== null)
                .forEach((child) => children.push([treeNode, child]));
        }
        if (foundParent !== null) {
            return false;
        }
        queue = children;
    }
    return false;
}
