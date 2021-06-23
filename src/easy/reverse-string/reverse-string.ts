function reverseByIndex(s: string[], i: number): void {
    if (i >= s.length / 2) {
        return;
    }
    let tmp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = tmp;
    reverseByIndex(s, i + 1);
}

export function reverseString(s: string[]): void {
    reverseByIndex(s, 0);
}
