export function lengthOfLastWord(s: string): number {
    return s
        .split(" ")
        .filter((_) => _ !== "")
        .reduce((_, l) => l, "").length;
}
