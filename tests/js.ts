import { test, assertEqual } from 'liltest';
import { compile } from '../src/lib';

test({
  name: 'Basic',
  fn() {
    const template = compile(`2 + 2 is <% 2 + 2%>.`);
    assertEqual(template(), '2 + 2 is 4.');
  }
});

test({
  name: 'Math',
  fn() {
    const template = compile('1 + 2 * 3 + 4 = <% 1 + 2 * 3 + 4 %>.');
    assertEqual(template(), '1 + 2 * 3 + 4 = 11.');
  }
});

test({
  name: 'Variable',
  fn() {
    const template = compile('Hello <% name %>!');
    assertEqual(template({ name: 'Jack' }), 'Hello Jack!');
  }
});

test({
  name: 'Condition',
  fn() {
    const template = compile(
      '<% if lang === "fa" %>Salam!<% else %>Hello!<% /if %>'
    );
    assertEqual(template({ lang: 'fa' }), 'Salam!');
    assertEqual(template({}), 'Hello!');
  }
});

test({
  name: 'Loop',
  fn() {
    const template = compile('<% for x in x %><% x %><% /for %>');
    assertEqual(template({ x: [0, 1, 2, 3] }), '0123');
  }
});
