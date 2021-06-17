import { TreeNode } from "lc/tools/tree-node";

export function averageOfLevels(root: TreeNode | null): number[] {
    let result: number[] = [];
    let queue: Array<TreeNode | null> = [];
    queue.push(root);
    while (queue.length !== 0) {
        let children: Array<TreeNode | null> = [];
        let sum = 0.0;
        let cnt = 0;
        while (queue.length !== 0) {
            let treeNode = queue.shift() as TreeNode | null;
            if (treeNode !== null) {
                ++cnt;
                sum += treeNode.val;
                children.push(treeNode.left);
                children.push(treeNode.right);
            }
        }
        if (cnt !== 0) {
            result.push(sum / cnt);
            queue = children;
        }
    }
    return result;
}
