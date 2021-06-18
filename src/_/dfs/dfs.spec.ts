import { TreeNode } from "lc/tools/tree-node";
import { DFS } from "./dfs";

test("DFS", () => {
    let tree1 = null;
    let visited1: Array<number> = [];
    DFS(tree1, (_) => visited1.push(_.val));
    expect(visited1).toStrictEqual([]);

    // prettier-ignore
    let tree2 =
        new TreeNode(1,
            new TreeNode(2,
                new TreeNode(3),
                null,
            ),
            new TreeNode(5,
                null,
                new TreeNode(7),
            ),
        );
    let visited2: Array<number> = [];
    DFS(tree2, (_) => visited2.push(_.val));
    let expected2 = [1, 2, 3, 5, 7];
    expect(visited2).toStrictEqual(expected2);

    // prettier-ignore
    let tree3 =
        new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4,
                    new TreeNode(6),
                    new TreeNode(7),
                ),
                null,
            ),
            new TreeNode(3,
                null,
                new TreeNode(5,
                    null,
                    new TreeNode(8,
                        new TreeNode(9),
                        null,
                    ),
                ),
            ),
        );
    let visited3: Array<number> = [];
    DFS(tree3, (_) => visited3.push(_.val));
    let expected3 = [1, 2, 4, 6, 7, 3, 5, 8, 9];
    expect(visited3).toStrictEqual(expected3);
});
