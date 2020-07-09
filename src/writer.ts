interface StackItem {
  result: string;
  current: string;
  indention: string;
}

export class Writer {
  result = '';
  private indention = '';
  private current = '';
  private stack: StackItem[] = [];

  write(chunk: any) {
    this.current += typeof chunk === 'string' ? chunk : String(chunk);
  }

  brk() {
    if (this.current) {
      this.result +=
        this.current
          .split(/\r?\n/g)
          .map(line => this.indention + line)
          .join('\n') + '\n';
    } else {
      this.result += '\n';
    }
    this.indention = this.current = '';
  }

  flush() {
    this.result += this.current
      .split(/\r?\n/g)
      .map(line => this.indention + line)
      .join('\n');
    this.current = '';
  }

  indent(indention: string) {
    this.indention = indention;
  }

  push() {
    this.stack.push({
      result: this.result,
      indention: this.indention,
      current: this.current
    });
    this.result = this.indention = this.current = '';
  }

  pop() {
    this.flush();
    const { result, indention, current } = this.stack.pop()!;
    this.current = current + this.result.trimRight();
    this.indention = indention;
    this.result = result;
  }
}
