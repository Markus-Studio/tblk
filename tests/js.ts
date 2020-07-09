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

test({
  name: 'CoalesceExpression',
  fn() {
    const template = compile('<% a ?? b %>');
    assertEqual(template({ a: null, b: 5 }), '5');
    assertEqual(template({ a: undefined, b: 5 }), '5');
    assertEqual(template({ a: 3, b: 5 }), '3');
    assertEqual(template({ a: false, b: 5 }), 'false');
  }
});

test({
  name: 'Nested CoalesceExpression',
  fn() {
    const template = compile('<% a ?? b ?? c %>');
    assertEqual(template({ a: null, b: null, c: 5 }), '5');
    assertEqual(template({ a: null, b: 4, c: 5 }), '4');
    assertEqual(template({ a: 3, b: 4, c: 5 }), '3');
  }
});

test({
  name: 'Single loop filter',
  fn() {
    const template = compile('<% for x in x |> x <= 4 %><% x %><% /for %>');
    assertEqual(template({ x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }), '01234');
  }
});

test({
  name: 'Multiple loop filters',
  fn() {
    const template = compile(
      '<% for x in x |> x <= 4 |> x >= 2 %><% x %><% /for %>'
    );
    assertEqual(template({ x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }), '234');
  }
});
