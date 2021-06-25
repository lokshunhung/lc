function parseVersion(v: string): number[] {
    return v.split(".").map((_) => parseInt(_, 10));
}

export function compareVersion(version1: string, version2: string): number {
    let v1 = parseVersion(version1);
    let v2 = parseVersion(version2);
    let l1 = v1.length;
    let l2 = v2.length;
    let l = Math.max(l1, l2);
    for (let i = 0; i < l; ++i) {
        let n1 = i < l1 ? v1[i] : 0;
        let n2 = i < l2 ? v2[i] : 0;
        if (n1 < n2) {
            return -1;
        }
        if (n1 > n2) {
            return 1;
        }
    }
    return 0;
}
