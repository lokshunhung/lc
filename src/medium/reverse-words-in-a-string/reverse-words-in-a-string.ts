export function reverseWords(s: string): string {
    return s
        .split(" ")
        .filter((_) => _ !== "")
        .reverse()
        .join(" ");
}
