import { test, assertEqual } from 'liltest';
import { compile } from '../src/lib';

test({
  name: 'Basic',
  fn() {
    const template = compile(`Hello!
  X<% #x %>X
<% function x %>
O
O
<% /function %>`);
    assertEqual(template(), 'Hello!\n  XO\n  OX');
  }
});

test({
  name: 'Parameter',
  fn() {
    const template = compile(`2 + 3 = <% #sum a=2 b=3 %>.
<% function sum %>
<% a + b %>
<% /function %>`);
    assertEqual(template(), '2 + 3 = 5.');
  }
});

test({
  name: 'Global',
  fn() {
    const template = compile(`2 + 3 = <% #sum a=2 %>.
<% function sum %>
<% a + b %>
<% /function %>`);
    assertEqual(template({ b: 3 }), '2 + 3 = 5.');
  }
});
