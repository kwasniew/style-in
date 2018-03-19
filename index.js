var cheerio = require("cheerio");
var path = require("path");
var fs = require("fs");
var url = require("url");

module.exports = function (argv) {
    console.log(argv);
    var fileName = argv["_"][0];
    var html = fs.readFileSync(fileName);

    var base = argv["base"] || currentFileDir(fileName);

    var dom = cheerio.load(String(html));
    injectStyles(dom);
    return new Buffer(dom.html());

    function injectStyles(dom) {
        dom("link").each(function (idx, el) {
            el = dom(el);
            var href = url.parse(el.attr("href")).pathname;


            if (el.attr("rel") === "stylesheet" && isLocal(href) && !isNoscript(el.parent())) {
                var file = path.join(base, href);

                var style = fs.readFileSync(file);
                var inlinedTag = "<style>" + style.toString() + "</style>";
                el.replaceWith(inlinedTag);
            }
        });
    }

    function currentFileDir(fileName) {
        var fullPath = fs.realpathSync(fileName);
        var base = fullPath.substr(0, fullPath.lastIndexOf("/"));
        return base;
    }

    function isLocal(href) {
        return href && !url.parse(href).hostname;
    }

    function isNoscript(el) {
        return el && el.get(0) && el.get(0).tagName === "noscript";
    }

};
