import { TreeNode } from "lc/tools/tree-node";

export function levelOrderBottom(root: TreeNode | null): number[][] {
    let level = 0;
    let result: number[][] = [];
    let queue: Array<TreeNode | null> = [];
    queue.push(root);
    while (queue.length !== 0) {
        let children: Array<TreeNode | null> = [];
        levelLoop: while (queue.length !== 0) {
            let treeNode = queue.shift() as TreeNode | null;
            if (treeNode === null) {
                continue levelLoop;
            }
            if (result[level] === undefined) {
                result[level] = [];
            }
            result[level].push(treeNode.val);
            children.push(treeNode.left);
            children.push(treeNode.right);
        }
        queue = children;
        ++level;
    }
    return result.reverse();
}
