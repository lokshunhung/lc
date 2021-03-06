import { toArray, toTreeNode, TreeNode } from "./tree-node";

test("toTreeNode", () => {
    let input1: number[] = [];
    let result1 = toTreeNode(input1);
    let expected1 = null;
    expect(result1).toBe(expected1);

    let input2 = [1];
    let result2 = toTreeNode(input2);
    let expected2 = new TreeNode(1);
    expect(result2).toStrictEqual(expected2);

    let input3 = [1, 2, 3];
    let result3 = toTreeNode(input3);
    let expected3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(result3).toStrictEqual(expected3);

    let input4 = [1, 2, 3, null, 5, 6];
    let result4 = toTreeNode(input4);
    // prettier-ignore
    let expected4 =
        new TreeNode(1,
            new TreeNode(2,
                null,
                new TreeNode(5)
            ),
            new TreeNode(3,
                new TreeNode(6),
                null,
            ),
        );
    expect(result4).toStrictEqual(expected4);

    let input5 = [1, null, 2, 3];
    let result5 = toTreeNode(input5);
    // prettier-ignore
    let expected5 =
        new TreeNode(1,
            null,
            new TreeNode(2,
                new TreeNode(3),
                null,
            ),
        );
    expect(result5).toStrictEqual(expected5);

    let input6 = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
    let result6 = toTreeNode(input6);
    // prettier-ignore
    let expected6 =
        new TreeNode(5,
            new TreeNode(4,
                new TreeNode(11,
                    new TreeNode(7),
                    new TreeNode(2)
                ),
                null,
            ),
            new TreeNode(8,
                new TreeNode(13,
                    null,
                    null,
                ),
                new TreeNode(4,
                    null,
                    new TreeNode(1),
                ),
            ),
        );
    expect(result6).toStrictEqual(expected6);
});

test("toArray", () => {
    let input1 = null;
    let result1 = toArray(input1);
    let expected1: number[] = [];
    expect(result1).toStrictEqual(expected1);

    let input2 = new TreeNode(1);
    let result2 = toArray(input2);
    let expected2 = [1];
    expect(result2).toStrictEqual(expected2);

    let input3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    let result3 = toArray(input3);
    let expected3 = [1, 2, 3];
    expect(result3).toStrictEqual(expected3);

    // prettier-ignore
    let input4 =
        new TreeNode(1,
            new TreeNode(2,
                null,
                new TreeNode(5),
            ),
            new TreeNode(3,
                new TreeNode(6),
                null,
            ),
        );
    let result4 = toArray(input4);
    let expected4 = [1, 2, 3, null, 5, 6];
    expect(result4).toStrictEqual(expected4);

    // prettier-ignore
    let input5 =
        new TreeNode(1,
            null,
            new TreeNode(2,
                new TreeNode(3),
                null,
            ),
        );
    let result5 = toArray(input5);
    let expected5 = [1, null, 2, 3];
    expect(result5).toStrictEqual(expected5);

    // prettier-ignore
    let input6 =
        new TreeNode(5,
            new TreeNode(4,
                new TreeNode(11,
                    new TreeNode(7),
                    new TreeNode(2)
                ),
                null,
            ),
            new TreeNode(8,
                new TreeNode(13,
                    null,
                    null,
                ),
                new TreeNode(4,
                    null,
                    new TreeNode(1),
                ),
            ),
        );
    let result6 = toArray(input6);
    let expected6 = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
    expect(result6).toStrictEqual(expected6);
});
