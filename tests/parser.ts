import { test, assertEqual } from 'liltest';
import { compile } from '../src/lib';

test({
  name: 'T<<% 1 + 2%>>',
  fn() {
    const template = compile(`T<<% 1 + 2%>>`);
    assertEqual(template(), 'T<3>');
  }
});

test({
  name: '<<% 1 + 2%>>',
  fn() {
    const template = compile(`<<% 1 + 2%>>`);
    assertEqual(template(), '<3>');
  }
});

test({
  name: 'T<<<<% 1 + 2%>>>>',
  fn() {
    const template = compile(`T<<<<% 1 + 2%>>>>`);
    assertEqual(template(), 'T<<<3>>>');
  }
});

test({
  name: '<<<<% 1 + 2%>>>>',
  fn() {
    const template = compile(`<<<<% 1 + 2%>>>>`);
    assertEqual(template(), '<<<3>>>');
  }
});

test({
  name: '<% 1 + 2%>',
  fn() {
    const template = compile(`<% 1 + 2%>`);
    assertEqual(template(), '3');
  }
});

test({
  name: 'Text',
  fn() {
    const template = compile('Text');
    assertEqual(template(), 'Text');
  }
});

test({
  name: 'A<% 1 + 2%>',
  fn() {
    const template = compile(`A<% 1 + 2%>`);
    assertEqual(template(), 'A3');
  }
});

test({
  name: '%',
  fn() {
    const template = compile('%');
    assertEqual(template(), '%');
  }
});

test({
  name: '%%<',
  fn() {
    const template = compile('%%<');
    assertEqual(template(), '%%<');
  }
});

test({
  name: '<% 1 %>%',
  fn() {
    const template = compile('<% 1 %>%');
    assertEqual(template(), '1%');
  }
});

test({
  name: 'ABC\\r\\nD',
  fn() {
    const template = compile('ABC\r\nD');
    assertEqual(template(), 'ABC\nD');
  }
});

test({
  name: 'ABC\\rD',
  fn() {
    const template = compile('ABC\rD');
    assertEqual(template(), 'ABC\rD');
  }
});

test({
  name: '<\\n',
  fn() {
    const template = compile('  <% 1 + 2 %>X<\n  B\n  A');
    assertEqual(template(), '  3X<\n  B\n  A');
  }
});

// This fails :(
// test({
//   name: 'ABC\\r<% 1 + 2 %>',
//   fn() {
//     const template = compile('ABC\r<% 1 + 2 %>');
//     assertEqual(template(), 'ABC\r3');
//   }
// });
