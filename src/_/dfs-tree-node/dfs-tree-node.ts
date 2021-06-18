import { TreeNode } from "lc/tools/tree-node";

function forEachChildren(treeNode: TreeNode, visitChild: (childNode: TreeNode) => void): void {
    [treeNode.left, treeNode.right]
        .filter((child: TreeNode | null): child is TreeNode => child !== null)
        .forEach(visitChild);
}

export function DFS(root: TreeNode | null, visit: (treeNode: TreeNode) => void): void {
    if (root === null) {
        return;
    }
    visit(root);
    forEachChildren(root, (childNode) => {
        DFS(childNode, visit);
    });
}

export function iterativeDFS(root: TreeNode | null, visit: (treeNode: TreeNode) => void): void {
    if (root === null) {
        return;
    }
    let stack: Array<TreeNode> = [];
    stack.push(root);
    while (stack.length !== 0) {
        let treeNode = stack.pop()!;
        visit(treeNode);
        // first child should be last to be pushed to `stack`
        let childStack: Array<TreeNode> = [];
        forEachChildren(treeNode, (childNode) => {
            childStack.push(childNode);
        });
        while (childStack.length !== 0) {
            stack.push(childStack.pop()!);
        }
    }
}
