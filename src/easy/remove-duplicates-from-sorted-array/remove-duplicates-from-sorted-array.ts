export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let lo = 0;
    for (let hi = 1; hi < nums.length; ++hi) {
        if (nums[lo] === nums[hi]) {
            continue;
        }
        ++lo;
        nums[lo] = nums[hi];
    }
    return lo + 1;
}
