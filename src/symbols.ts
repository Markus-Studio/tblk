export class SymbolTable<K, V> {
  private frames: Map<K, V>[] = [];

  pushFrame() {
    this.frames.push(new Map());
  }

  popFrame() {
    if (!this.frames.pop()) throw new Error('Stack underflow.');
  }

  has(key: K): boolean {
    for (const frame of this.frames) {
      if (frame.has(key)) {
        return true;
      }
    }
    return false;
  }

  get(key: K): V | undefined {
    for (const frame of this.frames) {
      if (frame.has(key)) {
        return frame.get(key);
      }
    }
    return undefined;
  }

  set(key: K, value: V){
    if (this.frames.length === 0) throw new Error('SymbolTable: Set on empty frames stack');
    const last = this.frames[this.frames.length - 1];
    last.set(key, value);
  }
}
