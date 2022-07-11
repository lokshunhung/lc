class Solution {
    func addStrings(_ num1: String, _ num2: String) -> String {
        if num1.isEmpty {
            return num2
        }
        if num2.isEmpty {
            return num1
        }
        var (result, carry) = addChars(num1.last!, num2.last!)
        var num1Head = String(num1.dropLast())
        var num2Head = String(num2.dropLast())
        if carry {
            num1Head = addStrings(num1Head, "1")
        }
        return "\(addStrings(num1Head, num2Head))\(result)"
    }

    func addChars(_ c1: Character, _ c2: Character) -> (Character, Bool) {
        var result = c1.unicodeScalarCodePoint + c2.unicodeScalarCodePoint - Character("0").unicodeScalarCodePoint
        if result > Character("9").unicodeScalarCodePoint {
            return (Character(UnicodeScalar(result - 10)!), true)
        } else {
            return (Character(UnicodeScalar(result)!), false)
        }
    }
}

fileprivate extension Character {
    var unicodeScalarCodePoint: UInt32 {
        self.unicodeScalars[self.unicodeScalars.startIndex].value
    }
}
