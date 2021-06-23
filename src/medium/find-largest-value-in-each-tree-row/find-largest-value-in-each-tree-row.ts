import { TreeNode } from "lc/tools/tree-node";

export function largestValues(root: TreeNode | null): number[] {
    let result: number[] = [];
    if (root !== null) {
        let queue: Array<TreeNode> = [];
        queue.push(root);

        while (queue.length !== 0) {
            let children: Array<TreeNode> = [];
            let largest: number | null = null;
            while (queue.length !== 0) {
                let popped = queue.pop()!;
                if (largest === null || popped.val > largest) {
                    largest = popped.val;
                }
                [popped.left, popped.right]
                    .filter((child): child is TreeNode => child !== null)
                    .forEach((child) => children.push(child));
            }
            result.push(largest!);
            queue = children;
        }
    }
    return result;
}
