export function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let seenSet: Record<string, 1> = {};
    for (let i = 0, j = 0; i < s.length; ) {
        let c = s[i];
        if (!(c in seenSet)) {
            seenSet[c] = 1;
            ++i;
            let diff = i - j;
            if (diff > max) {
                max = diff;
            }
        } else {
            delete seenSet[s[j]];
            ++j;
        }
    }
    return max;
}
