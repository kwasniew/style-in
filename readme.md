# style-in

Replaces CSS link tags with inline style tags

It's a fork of [inline-styles](https://github.com/maxogden/inline-styles) with the following changes:
- no data URIs inlining
- ignoring noscript embeds
- styles are resolved relatively to HTML file location, not the command execution dir


```
npm install style-in
style-in example/index.html > example/index.after.html
```
