interface IteratorT {
    hasNext(): boolean;
    next(): number;
}

export class PeekingIterator {
    private cachedNext?: number;

    constructor(private iterator: IteratorT) {}

    peek(): number {
        this.cachedNext ??= this.iterator.next();
        return this.cachedNext;
    }

    next(): number {
        let next: number = this.cachedNext ?? this.iterator.next();
        this.cachedNext = undefined;
        return next;
    }

    hasNext(): boolean {
        return this.cachedNext !== undefined || this.iterator.hasNext();
    }
}
