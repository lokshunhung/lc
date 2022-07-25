import XCTest

class SolutionTests: XCTestCase {
    func test1() {
        let nums = [2, 7, 11, 15]
        let target = 9
        let result = Solution().twoSum(nums, target)
        let expected = [0, 1]
        XCTAssertEqual(result, expected)
    }

    func test2() {
        let nums = [3, 2, 4]
        let target = 6
        let result = Solution().twoSum(nums, target)
        let expected = [1, 2]
        XCTAssertEqual(result, expected)
    }

    func test3() {
        let nums = [3, 3]
        let target = 6
        let result = Solution().twoSum(nums, target)
        let expected = [0, 1]
        XCTAssertEqual(result, expected)
    }
}
