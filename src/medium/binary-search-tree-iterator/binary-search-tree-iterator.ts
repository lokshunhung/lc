import { TreeNode } from "lc/tools/tree-node";

function* inorderGenerator(treeNode: TreeNode | null): Generator<number> {
    if (treeNode === null) {
        return;
    }
    yield* inorderGenerator(treeNode.left);
    yield treeNode.val;
    yield* inorderGenerator(treeNode.right);
}

export class BSTIterator {
    private generator: Generator<number>;
    private cachedNext?: IteratorResult<number>;

    constructor(root: TreeNode | null) {
        this.generator = inorderGenerator(root);
    }

    next(): number {
        if (!this.hasNext()) {
            throw new Error("iterator exhausted");
        }
        let next: IteratorResult<number> = this.cachedNext ?? this.generator.next();
        this.cachedNext = undefined;
        return next.value;
    }

    hasNext(): boolean {
        this.cachedNext ??= this.generator.next();
        return !this.cachedNext.done;
    }
}
