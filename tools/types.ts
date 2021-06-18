export type Queue<T> = Omit<Array<T>, "shift" | "pop">;

export type Stack<T> = Omit<Array<T>, "shift" | "unshift">;
