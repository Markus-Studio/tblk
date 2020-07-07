export class Writer {
  result = "";
  indent = "";
  current = "";

  write(chunk: string) {
    this.current += chunk;
  }

  brk() {
    if (this.current) {
      this.result += this.current.split(/\r?\n/g).map(line => this.indent + line).join('\n') + '\n';
    } else {
      this.result += '\n';
    }
    this.indent = this.current = "";
  }

  flush() {
    this.result += this.current.split(/\r?\n/g).map(line => this.indent + line).join('\n');
  }
}
