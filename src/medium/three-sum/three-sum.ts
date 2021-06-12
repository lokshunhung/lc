function twoSum(nums: number[], target: number): number[][] {
    let result: number[][] = [];

    type Num = number;
    type Index = number;
    let seen: Record<Num, Index> = {};

    for (let i = 0; i < nums.length; ++i) {
        let num = nums[i];
        let diff = target - num;

        if (diff in seen) {
            result.push([seen[diff], i]);
        }
    }

    return result;
}

export function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];

    type TwoSumTarget = number;
    type TwoSumTargetResult = [number, number];
    type TwoSumIndexes = number[];
    let twoSum: Record<TwoSumTarget, TwoSumTargetResult> = {};
    let targetToIndex: Record<TwoSumTarget, TwoSumIndexes> = {};

    for (let i = 0; i < nums.length; ++i) {
        let num = nums[i];
        let target = -num;
        if (targetToIndex[target] === undefined) {
            targetToIndex[target] = [];

            // compute two sum
        }
        targetToIndex[target].push(i);
    }

    return result;
}
