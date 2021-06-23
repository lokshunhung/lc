export function reverseStr(s: string, k: number): string {
    // If there are fewer than k characters left, reverse all of them
    if (s.length <= k) {
        return s.split("").reverse().join("");
    }
    // Reverse the first k characters for every 2k characters counting from the start of the string.
    // If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
    let head = s.slice(0, k);
    let body = s.slice(k, 2 * k);
    let tail = s.slice(2 * k);
    return reverseStr(head, k) + body + reverseStr(tail, k);
}
