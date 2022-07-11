import XCTest

class SolutionTests: XCTestCase {
    func test1() {
        let result = Solution().fizzBuzz(3)
        let expected = ["1", "2", "Fizz"]
        XCTAssertEqual(result, expected)
    }

    func test2() {
        let result = Solution().fizzBuzz(5)
        let expected = ["1", "2", "Fizz", "4", "Buzz"]
        XCTAssertEqual(result, expected)
    }

    func test3() {
        let result = Solution().fizzBuzz(15)
        let expected = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
        XCTAssertEqual(result, expected)
    }
}
