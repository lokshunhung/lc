import XCTest

class SolutionTests: XCTestCase {
    func test1() {
        let result = Solution().addStrings("11", "123")
        let expected = "134"
        XCTAssertEqual(result, expected)
    }

    func test2() {
        let result = Solution().addStrings("456", "77")
        let expected = "533"
        XCTAssertEqual(result, expected)
    }
}
