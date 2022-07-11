class Solution {
    func fizzBuzz(_ n: Int) -> [String] {
        var result = [String]()
        for i in 1...n {
            switch (i % 3, i % 5) {
            case (0, 0):
                result.append("FizzBuzz")
            case (0, _):
                result.append("Fizz")
            case (_, 0):
                result.append("Buzz")
            default:
                result.append(String(i))
            }
        }
        return result
    }
}
