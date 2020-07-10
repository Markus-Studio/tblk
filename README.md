# TBLK

TBLK is a JavaScript (TypeScript) template engine which uses JavaScript expressions
syntax, it is mainly developed to be used in code generators.

Features:
  - Pre-compiles templates to both JavaScript and TypeScript.
  - Dynamic templates using the API.
  - Supports JavaScript expressions.
  - Multi-file templates (Supports partials.)
  - Tries to preserve white spaces and line indention.
  - It compiles to native JavaScript code so it's **FAST**!
  - Generates source maps.

# Install

If you want to use the API install it as a dependency:
```
yarn add tblk
```

otherwise install `tblk` as a development dependency:
```
yarn add -D tblk
```

# Command Line Usage

```bash
# Using a configuration file:
npx tblk -config config.tblk.json
# Manual usage:
npx tblk file1.tblk file2.tblk -ts -no-source-map -o dist
```

Sample config file:
```json
{
  "outDir": "./dist",
  "compilerOptions": {
    "sourceMap": false,
    "typescript": true
  },
  "include": [
    "templates/**/*.tblk"
  ]
}
```

## Partials
Files that are prefixed by an underscore are treated as partials, take look at
the example directory to learn more.

# API

```ts
import * as tblk from 'tblk';
const template = tblk.compile(`<% a %> + <% b %> = <% a + b %>`);
console.log(template({a: 2, b: 3})); // 2 + 3 = 5
```

# Syntax

All the commands are supposed to be inside `<% ... %>`, otherwise they are treated
as normal text.

There are only a few commands:
  - Print
  - Condition
  - Loop
  - Partial Definition
  - Partial

## Print
```T
<% expression %>
2 + 2 = <% 2 + 2 %>
```

----

## Condition Command
```TBLK
<% if expression %>
Consequence 1
<% else if expression %>
Consequence 2
<% else %>
Alternate
<% /if %>
```

---

## Loop
```TBLK
<% for identifier in expression %>
<% /for %>
```

Loops also support in-place filtering of the data using the `|>` operator:
```TBLK
<% for identifier in expression |> x >= 5 %>
<% /for %>
```

---

## Partial
```TBLK
2 + 3 = <% #sum a=2 b=3 %>
<% function sum %>
<% a + b %>
<% /function %>
```

# Why?

When I tried other template engines there were problems with indention, take a look
at the following example:

```tblk
  <% "A\nB\nC" %>
```

Where most template engines will print something like:
```
  A
B
C
```

TBLK tries to preserve the line indention by printing:
```
  A
  B
  C
```

Another problem appears when you try to split your template into separate
modules, with TBLK you just have to prefix your filename with an  `_` and
you can use it in other parts just by writing `<% #filename x=2 y=3 ... %>`.

# Contributions
Please do!
