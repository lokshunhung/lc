// TODO: refactor
export function removeDuplicates(nums: number[]): number {
    let originalLength = nums.length;
    let prev: number | null = null;
    let removedCount: number = 0;
    for (let i = 0; i < nums.length; ++i) {
        let num = nums[i];
        if (prev === null) {
            prev = num;
            continue;
        }
        if (num === prev) {
            nums.splice(i, 1);
            --i;
            ++removedCount;
        }
        prev = num;
    }
    return originalLength - removedCount;
}
