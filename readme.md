# style-in

Replaces CSS link tags with inline style tags

It's a fork of [inline-styles](https://github.com/maxogden/inline-styles) with the following changes:
- no data URIs inlining
- ignoring noscript embeds
- ignoring query param cache busters
- by default styles are resolved relatively to HTML file location, not the command execution dir
- you can overwrite base resolution dir with --base=./example

```
npm install style-in
style-in example/index.html > example/index.after.html
style-in --base=./example example/index.html > example/index.after.html
```
