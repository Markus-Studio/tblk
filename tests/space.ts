import { test, assertEqual } from 'liltest';
import { compile, compileSource } from '../src/lib';

test({
  name: "Should preserve indention",
  fn() {
    const template = compile(`A\n  <% "B\\nC" %>\nD`)
    assertEqual(template(), `A\n  B\n  C\nD\n`);
  },
});

test({
  name: "No duplicate indention on the first line",
  fn() {
    const template = compile(`A\n  X<% "B\\nC" %>\nD`)
    assertEqual(template(), `A\n  XB\n  C\nD\n`);
  },
});

test({
  name: "Multi-part line with indention",
  fn() {
    const template = compile(`A\n  <% "Y" %>X<% "B\\nC" %>\nD`)
    assertEqual(template(), `A\n  YXB\n  C\nD\n`);
  },
});

test({
  name: "Loop indention",
  fn() {
    const template = compile(`  <%for x in items %><% x + "\\n" %><%/for%>`)
    assertEqual(template({items: [0, 1, 2]}), `  0\n  1\n  2\n  \n`);
  },
});

test({
  name: "Ignore line break in commands",
  fn() {
    const template = compile(`A<% "B" \n %>C\nD`)
    assertEqual(template(), `ABC\nD\n`);
  }
})

test({
  name: "Ignore command-only lines",
  fn() {
    const template = compile(`  <% for _ in items %>\nA\n<%/for%>`)
    assertEqual(template({items: [0, 1, 2]}), `A\nA\nA\n`);
  },
});
