export class NestedInteger {
    declare value: number | (number | NestedInteger)[];
    constructor(value?: number) {
        if (value !== undefined) {
            this.value = value;
        }
    }
    setInteger(value: number) {
        this.value = value;
    }
    add(elem: NestedInteger) {
        Array.isArray(this.value) || (this.value = []);
        this.value.push(elem);
    }
}

function build(head: NestedInteger, tokens: readonly string[], ref: Record<"i", number>): NestedInteger {
    if (ref.i < tokens.length) {
        let token = tokens[ref.i];
        if (token === "[") {
            ++ref.i;
            while (tokens[ref.i] !== "]") {
                head.add(build(new NestedInteger(), tokens, ref));
                ++ref.i;
            }
        } else {
            // numbers
            head.setInteger(Number(token));
        }
    }
    return head;
}

export function deserialize(s: string): NestedInteger {
    let tokens: string[] = [];
    let token = "";
    for (let c of s) {
        if (c === "[") {
            tokens.push(c);
        } else if (c === "]") {
            if (token !== "") {
                tokens.push(token);
                token = "";
            }
            tokens.push(c);
        } else if (c === ",") {
            if (token !== "") {
                tokens.push(token);
                token = "";
            }
        } else {
            // digit or negative sign
            token += c;
        }
    }
    if (token !== "") {
        tokens.push(token);
        token = "";
    }

    const ref: Record<"i", number> = { i: 0 };
    return build(new NestedInteger(), tokens, ref);
}
