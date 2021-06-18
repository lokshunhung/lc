import { toTreeNode } from "lc/tools/tree-node";
import { BSTIterator } from "./binary-search-tree-iterator";

describe("BSTIterator", () => {
    // prettier-ignore
    let [, ...fns] = ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"] as const;
    let [root, ...args] = [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []];
    let [, ...expectedOutput] = [null, 3, 7, true, 9, true, 15, true, 20, false];

    let tRoot = toTreeNode(root[0]);
    let itr = new BSTIterator(tRoot);

    for (let i = 0; i < fns.length; ++i) {
        let fn = fns[i];
        let arg = args[i];
        let expected = expectedOutput[i];

        test(`${fn}(${arg}) -> ${expected}`, () => {
            let result = (itr[fn] as any).apply(itr, arg);
            expect(result).toBe(expected);
        });
    }
});

/*
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // return 3
bSTIterator.next();    // return 7
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 9
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 15
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 20
bSTIterator.hasNext(); // return False

Follow up:
Could you implement next() and hasNext() to run in average O(1) time and use O(h) memory, where h is the height of the tree?
*/
