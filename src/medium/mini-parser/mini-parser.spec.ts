import { deserialize, NestedInteger } from "./mini-parser";

test("123", () => {
    let result = deserialize("123");
    let expected = new NestedInteger(123);
    expect(result).toStrictEqual(expected);
});

test("[123,[456,[789]]]", () => {
    let result = deserialize("[123,[456,[789]]]");
    let a789 = new NestedInteger();
    a789.add(new NestedInteger(789));
    let a456 = new NestedInteger();
    a456.add(new NestedInteger(456));
    a456.add(a789);
    let a123 = new NestedInteger();
    a123.add(new NestedInteger(123));
    a123.add(a456);
    let expected = a123;
    expect(result).toStrictEqual(expected);
});

test("[123,[456],789,[1]]", () => {
    let result = deserialize("[123,[456],789,[1]]");
    let t: NestedInteger;
    let expected = new NestedInteger();
    expected.add(new NestedInteger(123));
    expected.add(((t = new NestedInteger()), t.add(new NestedInteger(456)), t));
    expected.add(new NestedInteger(789));
    expected.add(((t = new NestedInteger()), t.add(new NestedInteger(1)), t));
    expect(result).toStrictEqual(expected);
});
