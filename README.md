# Issue demo using rollup

First run: `npm install`

Use `npm run build-current` to simulate the current case. This demonstrates that
rollup (or another loader) will attempt to load `index.js`, which in this case
is a CommonJS module, but the same issue would occur for UMD modules too.

Use `npm run build-corrected` to show what happens when the tweaks in my [PR][1]
are applied. Rollup will correctly locate the ES2015 module, which is using a
default export.

Use `npm run build-workaround` to demonstrate what I'm currently using to
work around the issue. It uses a named export, and locates the `default.js` file
explicitly.

[1]: https://github.com/zenparsing/zen-observable/pull/28
