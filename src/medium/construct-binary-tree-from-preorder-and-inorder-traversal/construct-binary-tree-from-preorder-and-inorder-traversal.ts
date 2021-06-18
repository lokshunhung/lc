import { TreeNode } from "lc/tools/tree-node";

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) {
        return null;
    }
    let pre = Array.from(preorder);
    let ind = Array.from(inorder);
    let current = new TreeNode(pre[0]);
    let preI = 1;
    while (preI < pre.length) {
        let p = pre[preI];

        let indI: number = ind.find((_) => _ === p)!;
        if (indI > preI) {
            current.left;
        }

        ++preI;
    }
}
