export function isPalindrome(s: string): boolean {
    let t = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let half = t.length / 2;
    return t.slice(0, Math.floor(half)) === t.slice(Math.ceil(half)).split("").reverse().join("");
}
