export function twoSum(nums: number[], target: number): number[] {
    type Num = number;
    type Index = number;
    let seen: Record<Num, Index> = {};

    for (let i = 0; i < nums.length; ++i) {
        let num = nums[i];
        let diff = target - num;

        if (diff in seen) {
            return [seen[diff], i];
        }

        seen[num] = i;
    }

    throw new Error("solution not found");
}
