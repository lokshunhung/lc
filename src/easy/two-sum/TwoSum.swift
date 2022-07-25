class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var seen: [Int: Int] = [:]
        for (i, n) in nums.enumerated() {
            if let seenIndex = seen[target - n] {
                return [seenIndex, i]
            }
            seen[n] = i
        }
        fatalError("solution not found")
    }
}
