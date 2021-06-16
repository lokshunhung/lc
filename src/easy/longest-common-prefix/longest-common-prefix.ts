export function longestCommonPrefix(strs: string[]): string {
    let result = "";
    let commonChar = "";
    for (let i = 0; ; ++i) {
        forStr: for (let str of strs) {
            if (i >= str.length) {
                return result;
            }
            let char = str[i];
            if (commonChar === "") {
                commonChar = char;
                continue forStr;
            }
            if (char !== commonChar) {
                return result;
            }
        }
        result += commonChar;
        commonChar = "";
    }
    return result;
}
