import { TreeNode } from "lc/tools/tree-node";

function* generateLeaves(root: TreeNode | null): Generator<number> {
    if (root === null) {
        return;
    }
    if (root.left === null && root.right === null) {
        yield root!.val;
        return;
    }
    yield* generateLeaves(root.left);
    yield* generateLeaves(root.right);
}

function generatorEquals(i1: Generator<number>, i2: Generator<number>): boolean {
    while (true) {
        let r1 = i1.next();
        let r2 = i2.next();
        if (r1.done !== r2.done) {
            return false;
        }
        if (r1.done) {
            return true;
        }
        if (r1.value !== r2.value) {
            return false;
        }
    }
}

// TODO: revert to using array (but with less allocation) because generators are slower
export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let leaves1 = generateLeaves(root1);
    let leaves2 = generateLeaves(root2);
    return generatorEquals(leaves1, leaves2);
}
